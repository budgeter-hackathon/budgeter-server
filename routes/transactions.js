const express = require("express");
const router = express.Router();
const controller = require("../controllers/transactions");

router.get("/", controller.getTransactions);

router.get("/:id", controller.getTransaction);

router.post("/", controller.createTransaction);

router.put("/:id", controller.updateTransaction);

router.delete("/:id", controller.deleteTransaction);

module.exports = router;
