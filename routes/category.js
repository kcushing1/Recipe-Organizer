const db = require("../models");

module.exports = function (app) {
  //create a new recipe category
  app.post("/api/categories", (req, res) => {
    db.Category.create(req.body).then((newCategory) => {
      res.json(newCategory);
    });
  });

  //list all categories
  app.get("/api/categories", (req,res) => {
    db.Category.findAll({
    }).then((findCategory) => {
      res.json(findCategory)
  })

  //search within a chosen category
  app.get("/api/categories/:id", (req,res) => {
    db.Category.findOne({
      where: {
        id: req.params.id
      }
    }).then((findCategory) => {
      res.json(findCategory)
  })

  //delete a category if it is no longer needed
  app.delete("/api/categories/:id", (req,res) => {
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    }).then((deleteCategory) => {
      res.json(deleteCategory)
  })

};
