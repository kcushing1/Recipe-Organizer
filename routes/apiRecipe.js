const db = require("../models");

module.exports = function (app) {
  //list all recipes
  app.get("/api/recipes", (req, res) => {
    db.Recipe.findAll({}).then((findRecipe) => {
      res.json(findRecipe);
    });
  });

  // search for a specific recipe by id
  app.get("/api/recipes/:id", (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id,
      },
    }).then((findRecipe) => {
      res.json(findRecipe);
    });
  });

  // search for recipes by category
  app.get("/api/recipes/category/:category", (req, res) => {
    db.Recipe.findAll({
      where: {
        category: req.params.category,
      },
    }).then((findSource) => {
      res.json(findSource);
    });
  });

  // search for recipes by source
  app.get("/api/recipes/source/:sourceId", (req, res) => {
    db.Recipe.findAll({
      where: {
        sourceId: req.params.sourceId,
      },
    }).then((findSource) => {
      res.json(findSource);
    });
  });

  //create a new recipe
  app.post("/api/recipes", (req, res) => {
    let resp = req.body;
    console.log(resp);
    db.Recipe.create({
      title: resp.title,
      category: resp.category,
      url_pg: resp.url_pg,
      rating: resp.rating,
      notes: resp.notes,
      SourceId: resp.SourceId,
    }).then((newRecipe) => {
      res.json(newRecipe);
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
