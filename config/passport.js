const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy

const db = require('../models')

passport.use(new LocalStrategy(
    function (username, password, done) {
        // Query db for a user with entered username
        db.User.findOne({
            where: {
                username: username
            }
        }).then(dbUser => {
            // If username does not match any user in db
            if (!dbUser) {
                return done(null, false, { message: "Incorrect username or password." })
            }
            // If password does not match username in db
            else if (!dbUser.validPassword(password)) {
                return done(null, false, { message: "Incorrect username or password." })
            }
            // Otherwise, return the user from db
            return done(null, dbUser)

        })
    }
));

// Needed for passport to work correctly
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;