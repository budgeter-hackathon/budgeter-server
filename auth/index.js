const bcrypt = require("bcrypt");
/**
 * Compare two passwords
 */
const comparePasswords = (password, callback) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, isMatch);
    }
  });
};

/**
 * Hashes the passwords for a user.
 */
const hashPassword = (user) => {
  if (user.changed("password")) {
    return bcrypt.hash(user.password, 10).then((password) => {
      user.password = password;
    });
  }
};

module.exports = {
  comparePasswords: comparePasswords,
  hashPassword: hashPassword
};
