const express = require("express");
const categoriesRoutes = express.Router();

categoriesRoutes.get("/", (req, res) => {
  res.send("Sending all categories from the database!\n");
});

categoriesRoutes.get("/:id", (req, res) => {
  let id = req.params.id;
  res.send(`Sending a single category where the id = ${id}!\n`);
});

module.exports = categoriesRoutes;
