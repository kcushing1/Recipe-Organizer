const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");

const db = require("./models");

// Initialize application on port 8080
const app = express();
const PORT = process.env.PORT || 8080;

app.use(session({ secret: process.env.SECRET || "be nice to jake", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiSource")(app);
require("./routes/apiRecipe")(app);
require("./routes/apiUnsplash")(app);
require("./routes/apiLoginSignup")(app);

// Start server
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
