const express = require("express");
const router = express.Router();

const orderHandler = require("./handler/order");

router.post("/make_order", orderHandler.makeOrder);
module.exports = router;
