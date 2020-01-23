const express = require("express");
const router = express.Router();

const transactionsRoutes = require("./transactions");
const categoriesRoutes = require("./categories");

router.use("/transactions", transactionsRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
