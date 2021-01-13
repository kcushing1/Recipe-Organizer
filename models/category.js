module.exports = function (sequelize, Datatypes) {
  const Category = sequelize.define("Category", {
    text: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      },
    },
  });
  return Category;
};
