require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const hookStrategy = require("./auth/passport-strategy");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = require("./routes");

const sequelize = require("./database").sequelize;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(cors());

app.use("/api", router);

app.use(passport.initialize());
hookStrategy(passport);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listening on port ${process.env.PORT}`);
  }
});
