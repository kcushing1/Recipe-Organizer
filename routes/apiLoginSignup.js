const db = require("../models");
// Require our passport configuration
const passport = require('../config/passport')

module.exports = function (app) {
    // If the user has valid login credentials, send them to main page.
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    // User signup
    app.post("/api/signup", function (req, res) {
        db.User.create({
            username: req.body.username,
            password: req.body.password
        }).then(() => {
            // If the user is created successfully, redirect to login page,
            res.redirect(307, "/api/login");
        }).catch(err => {
            // Otherwise send back 'unauthorized' error status
            res.status(401).json(err);
        });
    });

    // Route for logging user out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

};
