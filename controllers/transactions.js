const Transaction = require("../database").Transaction;

const getAllTransactions = (req, res) => {
  res.send("Getting all transactions!\n");
};

module.exports = {
  getAllTransactions: getAllTransactions
};
