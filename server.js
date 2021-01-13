const apiRoutes = require("./routes/apiRoutes");
const express = require("express");
const Sequelize = require("sequelize");
const db = require("./models");

// Initialize application on port 8080
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use("/api", apiRoutes);
//app.use("/", htmlRoutes);

// Start server
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
