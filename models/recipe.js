module.exports = function (sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    url_pg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5,
      },
    },
    notes: DataTypes.STRING,
  });

  Recipe.associate = function (models) {
    Recipe.belongsTo(models.Source, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Recipe;
};
