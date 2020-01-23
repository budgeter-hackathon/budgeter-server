const hashPassword = require("./auth-utils").hashPassword;
const comparePasswords = require("./auth-utils").comparePasswords;
const hookStrategy = require("./passport-strategy");

module.exports = {
  hashPassword: hashPassword,
  comparePasswords: comparePasswords,
  hookStrategy: hookStrategy
};
