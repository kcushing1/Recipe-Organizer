const apiRoutes = require("./routes/apiRoutes");
const express = require("express");
const session = require("express-session");
const Sequelize = require("sequelize");
const passport = require("./config/passport");

const db = require("./models");

// Initialize application on port 8080
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiSource")(app);
require("./routes/apiLoginSignup")(app);

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Start server
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
