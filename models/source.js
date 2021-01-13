module.exports = function (sequelize, Datatypes) {
  const Source = sequelize.define("Source", {
    text: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      },
    },
  });
  return Source;
};
