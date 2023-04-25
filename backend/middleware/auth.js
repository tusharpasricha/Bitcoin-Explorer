const passport = require('passport');
const bcrypt = require('bcrypt');
const initPassport = require('../config/passport-config');
const users = require('../models/users');

initPassport(passport);

const authenticate = async(email, password, done) => {
    const user = users.find(user=>user.email===email);
    if (user === undefined)
        return done(null, false, { message: 'No user with that email' });
    try {
        if (await bcrypt.compare(password, user.password)) {
            
        }
        else
            return done(null, false, { message: 'Wrong password' });
    } catch (error) {
        return done(error);
    }
    
}

module.exports = authenticate;