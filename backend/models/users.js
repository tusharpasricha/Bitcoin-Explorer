const bcrypt = require("bcrypt");

const users = [
  {
    id: 1,
    name: "xyz",
    email: "xyz@email.com",
    password: bcrypt.hash("helloxyz", 10),
  },
];

module.exports = users;
