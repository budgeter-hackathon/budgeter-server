/**
 * +-----------+--------------+------+-----+---------+----------------+
 * | Field     | Type         | Null | Key | Default | Extra          |
 * +-----------+--------------+------+-----+---------+----------------+
 * | id        | int(11)      | NO   | PRI | NULL    | auto_increment |
 * | name      | varchar(255) | YES  | UNI | NULL    |                |
 * | createdAt | datetime     | NO   |     | NULL    |                |
 * | updatedAt | datetime     | NO   |     | NULL    |                |
 * +-----------+--------------+------+-----+---------+----------------+
 */
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
