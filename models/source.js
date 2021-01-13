module.exports = function (sequelize, DataTypes) {
  const Source = sequelize.define("Source", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      },
    },
  });
  return Source;
};
