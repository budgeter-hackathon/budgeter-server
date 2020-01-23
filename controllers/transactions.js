const Transaction = require("../database").Transaction;

const getTransactions = (req, res) => {
  Transaction.findAll()
    .then((transactions) => {
      res.send(transactions);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTransaction = (req, res) => {
  let id = req.params.id;
  Transaction.findOne({ where: { id } })
    .then((transaction) => {
      res.send(transaction);
    })
    .catch((err) => console.log(err));
};

const createTransaction = (req, res) => {
  let transaction = req.body;
  Transaction.create(transaction)
    .then((transaction) => {
      res.send(transaction);
    })
    .catch((err) => console.log(err));
};

const updateTransaction = (req, res) => {
  let id = req.params.id;
  let transaction = req.body;
  Transaction.update(transaction, { where: { id } })
    .then(() => {
      Transaction.findOne({ id })
        .then((transaction) => {
          res.send(transaction);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const deleteTransaction = (req, res) => {
  let id = req.params.id;
  Transaction.destroy({ where: { id } })
    .then((results) => {
      res.send(results);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getTransactions: getTransactions,
  getTransaction: getTransaction,
  createTransaction: createTransaction,
  updateTransaction: updateTransaction,
  deleteTransaction: deleteTransaction
};
