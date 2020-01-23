const express = require("express");
const router = express.Router();

const transactionsRoutes = require("./transactions");
const categoriesRoutes = require("./categories");
const accountRoutes = require("./accounts");

router.use("/transactions", transactionsRoutes);

router.use("/categories", categoriesRoutes);

router.use("/accounts", accountRoutes);

module.exports = router;
