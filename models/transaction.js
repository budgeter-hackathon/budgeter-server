/**
 * +-----------------+---------------+------+-----+---------+----------------+
 * | Field           | Type          | Null | Key | Default | Extra          |
 * +-----------------+---------------+------+-----+---------+----------------+
 * | id              | int(11)       | NO   | PRI | NULL    | auto_increment |
 * | amount          | decimal(10,0) | NO   |     | NULL    |                |
 * | description     | text          | YES  |     | NULL    |                |
 * | date            | datetime      | NO   |     | NULL    |                |
 * | transactionType | varchar(255)  | NO   |     | NULL    |                |
 * | categoryId      | int(11)       | NO   |     | NULL    |                |
 * | accountId       | int(11)       | NO   |     | NULL    |                |
 * | createdAt       | datetime      | NO   |     | NULL    |                |
 * | updatedAt       | datetime      | NO   |     | NULL    |                |
 * +-----------------+---------------+------+-----+---------+----------------+
 */
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
