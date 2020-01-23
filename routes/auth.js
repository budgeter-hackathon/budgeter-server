const express = require("express");
const router = express.Router();

const APIRoutes = (passport) => {};

router.get("/:userId", (req, res) => {
  res.send("Auth GET route!\n");
});

router.post("/:userId", (req, res) => {
  res.send("Auth POST route!\n");
});

module.exports = router;
