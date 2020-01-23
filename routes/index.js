const router = require("express").Router();

const authRoutes = (passport) => {
  get("/", (req, res) => {
    res.send("Success!");
  });
};

module.exports = authRoutes;
