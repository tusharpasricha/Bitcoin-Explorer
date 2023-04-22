const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const users = require("../models/users");
const generateID = require('../utils/genID');

const getUsers = (req, res) => {
  res.json(users);
  req.session.isAuth = true;
  console.log(req.session.id);
};

const register = async (req, res) => {
  const find = users.find((user) => user.email === req.body.email);
  if (find === undefined) {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      console.log(salt);
      console.log(hashedPassword);
      const newid = generateID();
      console.log(newid);
      const user = {
        id: newid,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      };
      users.push(user);
      res.status(201).send("Account created successfully");
    } catch {
      res.status(500).send();
    }
  } else res.status(400).send("User already exists");
};

const login = async (req, res) => {
  try {
    const user = users.find((user) => user.name === req.body.name);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ message: 'Success, logged in.', name:user.name ,token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

module.exports = { register, login, getUsers };

// const user = users.find((user) => user.name === req.body.name);
// if (user === undefined) return res.status(401).json({ error: 'user not found' });
// try {
//   if (await bcrypt.compare(req.body.password, user.password))
//   res.json({ message: 'Success, logged in.'});
//   else res.status(500).json({ error: 'Internal server error.' });
// } catch {
//   res.status(500).send();
// }