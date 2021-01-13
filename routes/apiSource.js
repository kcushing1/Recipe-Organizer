const db = require("../models");

module.exports = function (app) {
  //create a new recipe source
  app.post("/api/sources", (req, res) => {
    db.Source.create(req.body).then((newSource) => {
      res.json(newSource);
    });
  });

  //list all sources
  app.get("/api/sources", (req, res) => {
    db.Source.findAll({}).then((findSource) => {
      res.json(findSource);
    });
  });

  //search within a chosen source
  app.get("/api/sources/:id", (req, res) => {
    db.Source.findOne({
      where: {
        id: req.params.id,
      },
    }).then((findSource) => {
      res.json(findSource);
    });
  });

  //delete a source if it is no longer needed
  app.delete("/api/sources/:id", (req, res) => {
    db.Source.destroy({
      where: {
        id: req.params.id,
      },
    }).then((deleteSource) => {
      res.json(deleteSource);
    });
  });
};
