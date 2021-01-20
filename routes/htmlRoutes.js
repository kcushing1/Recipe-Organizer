const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function (app) {
  // (logged out) landing page w/ links to login & signup
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // If logged in, redirect to home
  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  // If logged in, redirect to home
  app.get("/signup", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
  });

  // These use isAuth. middleware to restrict pages to logged in users
  //
  // Informational home page
  app.get("/home", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  // View one recipe in full
  app.get("/recipes/:id", isAuthenticated, (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id,
      },
    }).then((findRecipe) => {
      //res.json(findRecipe);
      res.sendFile(path.join(__dirname, "../public/html/dish-template.html"));
    });
  });

  // View all recipes
  app.get("/all", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/all.html"));
  });

  // Add recipe page
  app.get("/add", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/recipe_create.html"));
  });
};
