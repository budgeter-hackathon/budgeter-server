/**
 * Creates the connection to Sequelize using a .env file which should be created
 * in your own local branch of this repository.
 * Set logging to true to the verbose command line output of the raw SQL queries
 * that Sequelize is executing.
 */
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    dialect: "mysql",
    logging: console.log
  }
);

/**
 * Initializes each model / table in the database.
 */
const AccountModel = require("../models").Account;
const CategoryModel = require("../models").Category;
const TransactionModel = require("../models").Transaction;
const UserModel = require("../models").User;

const Account = AccountModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

/**
 * This syncs all models defined in the seqeuliz instance.
 */
sequelize
  .authenticate()
  .then(() => console.log("Sequelize authenticated!"))
  .catch((err) => console.log(err));

sequelize
  .sync({ force: true })
  .then(() => console.log("Sequelize synced!"))
  .then(() => {
    Account.create({ name: "Checking" })
      .then((res) => console.log(res.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Category.create({ name: "Food", targetBudget: 1234.56 })
      .then((res) => console.log(res.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Transaction.create({
      amount: 12,
      description: "Big sandwich for big boi",
      transactionType: "debit",
      date: new Date(),
      categoryId: 1,
      accountId: 1
    })
      .then((res) => console.log(res.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    User.create({
      username: "fullstack-tony",
      email: "fullstack.tony@gmail.com",
      password: "fullstack-password"
    })
      .then((user) => console.log(user.dataValues))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err))
  .catch((err) => console.log(err));

module.exports = {
  sequelize: sequelize,
  Account: Account,
  Category: Category,
  Transaction: Transaction
};
