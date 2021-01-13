module.exports = function (sequelize, Datatypes) {
  const Recipe = sequelize.define("Recipe", {
    title: {
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
      defaultValue: 5,
      validate: {
        min: 1,
        max: 10,
      },
    },
    notes: DataTypes.STRING,
    tested: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });

  Recipe.associate = function (models) {
    Recipe.belongsTo(models.Source, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Recipe.associate = function (models) {
    Recipe.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Recipe;
};
