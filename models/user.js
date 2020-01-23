const hashPassword = require("../auth").hashPassword;
const comparePasswords = require("../auth").comparePasswords;

const User = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      instanceMethods: { comparePasswords: comparePasswords },
      hooks: { beforeValidate: hashPassword }
    }
  );
};

module.exports = User;
