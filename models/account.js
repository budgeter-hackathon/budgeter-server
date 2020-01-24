const Account = (sequelize, DataTypes) => {
  return sequelize.define("accounts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
};

module.exports = Account;
