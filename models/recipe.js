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
        //0 is untested
        //1 is bad
        //5 is great
        min: 0,
        max: 5,
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

  return Recipe;
};
