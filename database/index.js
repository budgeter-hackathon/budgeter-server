const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    dialect: "mysql",
    logging: false
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize authenticated!");
  })
  .catch((err) => console.log(err));

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database syned via Sequelize!");
  })
  .catch((err) => console.log(err));

module.exports = {
  sequelize: sequelize
};
