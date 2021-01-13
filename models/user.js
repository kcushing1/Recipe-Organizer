module.exports = function (sequelize, Datatypes) {
    const User = sequelize.define("User", {
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 140],
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        }
    });
    return User;
};
