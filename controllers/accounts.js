const Account = require("../models").Account;

const getAccounts = (req, res) => {
  Account.findAll()
    .then((accounts) => {
      res.json(accounts);
    })
    .catch((err) => console.log(err));
};

const getAccount = (req, res) => {
  let id = req.params.id;
  Account.findOne({ where: { id } })
    .then((account) => {
      res.json(account);
    })
    .catch((err) => console.log(err));
};

const addAccount = (req, res) => {
  let account = req.body;
  console.log(account);
  Account.create(account)
    .then((account) => {
      res.send(account);
    })
    .catch((err) => console.log(err));
};

const deleteAccount = (req, res) => {
  let id = req.params.id;
  Account.destroy({ where: { id } })
    .then(() => {
      res.send(`Account id ${id} successfully deleted!\n`);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAccounts: getAccounts,
  getAccount: getAccount,
  addAccount: addAccount,
  deleteAccount: deleteAccount
};
