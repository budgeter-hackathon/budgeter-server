/**
 * +--------------+--------------+------+-----+---------+----------------+
 * | Field        | Type         | Null | Key | Default | Extra          |
 * +--------------+--------------+------+-----+---------+----------------+
 * | id           | int(11)      | NO   | PRI | NULL    | auto_increment |
 * | name         | varchar(255) | NO   | UNI | NULL    |                |
 * | targetBudget | float        | NO   |     | 0       |                |
 * | createdAt    | datetime     | NO   |     | NULL    |                |
 * | updatedAt    | datetime     | NO   |     | NULL    |                |
 * +--------------+--------------+------+-----+---------+----------------+
 */
const Categories = (sequelize, DataTypes) => {
  return sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    targetBudget: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  });
};

module.exports = Categories;
