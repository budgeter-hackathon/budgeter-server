const Categories = (sequelize, DataTypes) => {
  return sequelize.define("categories", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    targetBudget: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  });
};

module.exports = Categories;
