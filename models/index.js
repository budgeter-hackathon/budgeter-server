/**
 * Define the models in this directory and export them from index.js
 */
const Account = require("./account");
const Category = require("./category");
const Transaction = require("./transaction");

module.exports = {
  Account: Account,
  Category: Category,
  Transaction: Transaction
};
