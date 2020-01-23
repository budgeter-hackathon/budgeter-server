const express = require("express");
const router = express.Router();

const accounts = require("../controllers/accounts");
const Account = require("../database").Account;

router.get("/", (req, res) => {
  Account.findAll()
    .then((accounts) => {
      res.json(accounts);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Account.findOne({ where: { id } })
    .then((account) => {
      res.json(account);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  let account = req.body;
  Account.create(account)
    .then((account) => {
      res.send(account);
    })
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Account.destroy({ where: { id } })
    .then(() => {
      res.send(`Account id ${id} successfully deleted!\n`);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
