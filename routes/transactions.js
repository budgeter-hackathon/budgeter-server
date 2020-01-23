const express = require("express");
const router = express.Router();
const { getAllTransactions } = require("../controllers");

router.get("/", (req, res) => {
  res.send("Sending all transactions from the database!\n");
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.send(`Sending a single transaction where id = ${id}!\n`);
});

router.post("/", (req, res) => {
  const {
    amount,
    description,
    date,
    transactionType,
    categoryId,
    categoryName,
    accountId
  } = req.body;
  res.send(
    `Adding a single post with amount = ${amount} with the description as '${description}'!\n`
  );
});

router.patch("/:id", (req, res) => {
  let id = req.params.id;
  res.send(`Updating a single transaction where the id = ${id}!\n`);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.send(`Deleting a single transaction where the id = ${id}!\n`);
});

module.exports = router;
