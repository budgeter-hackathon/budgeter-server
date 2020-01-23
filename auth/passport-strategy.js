const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const User = require("../models").User;

// const config = require("../config")

const hookJWTStrategy = (passport) => {
  const options = {};

  options.secretOrKey = process.env.SECRET;
  options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
  options.ignoreExpiration = false;

  passport.use(
    new JWTStrategy(options, (payload, callback) => {
      User.findOne({ where: { username: payload.username } }).then((user) => {
        if (!user) {
          callback(null, false);
        } else {
          callback(null, user);
        }
      });
    })
  );
};

module.exports = hookJWTStrategy;
