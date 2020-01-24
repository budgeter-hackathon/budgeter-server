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

const Account = AccountModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);

/**
 * This syncs all models defined in the seqeuliz instance.
 */
sequelize
  .authenticate()
  .then(() => console.log("Sequelize authenticated!"))
  .catch((err) => console.log(err));

module.exports = sequelize
  .sync({ force: true })
  .then(() => console.log("Sequelize synced!"))
  .then(() => {
    Account.create({
      id: 1,
      name: "Checking",
      balance: 5000.25
    })
      .then((account) => console.log(account.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Account.create({
      id: 2,
      name: "Savings",
      balance: 2250.98
    })
      .then((account) => console.log(account.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Category.create({
      id: 1,
      name: "Food",
      budget: 1234.56
    })
      .then((category) => console.log(category.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Category.create({
      id: 2,
      name: "Shopping",
      budget: 5000.88
    })
      .then((category) => console.log(category.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Transaction.create({
      amount: 12,
      description: "Big sandwich for big boi",
      transactionType: "Debit",
      date: new Date(),
      categoryId: 1,
      accountId: 1
    })
      .then((transaction) => console.log(transaction.dataValues))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Transaction.create({
      amount: 600,
      description: "Big jacket for big boi",
      transactionType: "Debit",
      date: new Date(),
      categoryId: 2,
      accountId: 2
    })
      .then((transaction) => console.log(transaction.dataValues))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

module.exports = {
  sequelize: sequelize,
  Account: Account,
  Category: Category,
  Transaction: Transaction
};
