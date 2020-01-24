const Transactions = (sequelize, DataTypes) => {
  return sequelize.define("transactions", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    description: DataTypes.TEXT,
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};

module.exports = Transactions;
