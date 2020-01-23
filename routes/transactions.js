const express = require("express");
const router = express.Router();
const Transaction = require("../database").Transaction;

router.get("/", (req, res) => {
  Transaction.findAll()
    .then((transactions) => {
      res.send(transactions);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Transaction.findOne({ where: { id } })
    .then((transaction) => {
      res.send(transaction);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  let {
    amount,
    description,
    date,
    transactionType,
    categoryId,
    accountId
  } = req.body;
  Transaction.create({
    amount: amount,
    description: description,
    transactionType: transactionType,
    categoryId: categoryId,
    accountId: accountId
  })
    .then((transaction) => {
      res.send(transaction);
    })
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {});

module.exports = router;
