const bcrypt = require("bcrypt");

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
  const user = users.find((user) => user.name === req.body.name);
  if (user === undefined) return res.status(401).send("User not found.");
  try {
    if (await bcrypt.compare(req.body.password, user.password))
      res.send("Success, logged in.");
    else res.send("Wrong password.");
  } catch {
    res.status(500).send();
  }
};

module.exports = { register, login, getUsers };
