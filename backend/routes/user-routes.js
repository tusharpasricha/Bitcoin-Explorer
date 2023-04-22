const express = require("express");
const session = require("express-session");

const usersControllers = require('../controllers/users-controllers');
const passport = require("passport");

const router = express.Router();

router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

router.use(passport.initialize());
router.use(passport.session());

router.use(express.json());

router.get("/", usersControllers.getUsers);

router.post("/register", usersControllers.register);

router.post("/login", usersControllers.login);

module.exports = router;
