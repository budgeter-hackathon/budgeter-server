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

router.put("/:id", (req, res) => {
  res.json("PUT request to the accounts route!\n");
});

router.patch("/:id", (req, res) => {
  res.json("PATCH request to the accounts route!\n");
});

router.delete("/:id", (req, res) => {
  res.json("DELETE request to the accounts route!\n");
});

module.exports = router;
