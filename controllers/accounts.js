const Account = require("../models").Account;

const getAccount = (req, res) => {
  let id = req.params.id;
  Account.findAll({ where: { id } })
    .then((account) => {
      res.send(account);
    })
    .catch((err) => console.log(err));
};

const deleteAccount = (req, res) => {
  let id = req.params.id;
  Account.findOne({ where: { id } })
    .then((account) => {
      res.send(account);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAccount: getAccount,
  deleteAccount: deleteAccount
};
