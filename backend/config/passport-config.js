const localStrategy = require('passport-local').Strategy;
//const passport = require('passport');

const authenticate = require("../middleware/auth");

function initPassport(passport) {
    passport.use(new localStrategy({ usernameField: 'email' }, authenticate));
    passport.serializeUser((user, done) => {done(null, user.id)});
    passport.deserializeUser((id, done) => {
        done(null, )
    });
}

module.exports = initPassport;