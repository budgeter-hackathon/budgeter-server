// https://hisk.io/role-based-authentication-with-angular-express-jwt-mysql-part-1/

require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
const hookStrategy = require("./auth/passport-strategy");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = require("./routes");

const db = require("./database");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(cors());

app.use("/api", router);

app.use(passport.initialize());
hookStrategy(passport);

app.get("/", (req, res) => {});
app.post("/", (req, res) => {});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listening on port ${process.env.PORT}`);
  }
});
