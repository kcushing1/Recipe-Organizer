const db = require("../models");

module.exports = function (app) {
  //list all recipes
  app.get("/api/recipes", (req, res) => {
    db.Recipe.findAll({}).then((findRecipe) => {
      res.json(findRecipe);
    });
  });

  //search for a specific recipe
  app.get("/api/recipes", (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id,
      },
    }).then((findRecipe) => {
      res.json(findRecipe);
    });
  });

  //create a new recipe
  app.post("/api/recipes", (req, res) => {
    let resp = req.body;
    db.Recipe.create({
      title: resp.title,
      url_pg: resp.url_pg,
      rating: resp.rating,
      notes: resp.notes,
      tested: resp.tested,
    }).then((newSource) => {
      res.json(newSource);
    });
  });

  //delete a recipe
  app.delete("/api/recipes/:id", (req, res) => {
    db.Recipe.destroy({
      where: {
        id: req.params.id,
      },
    }).then((deleteRecipe) => {
      res.json(deleteRecipe);
    });
  });
};
