const express = require("express");
const router = express.Router();

const categoryHandler = require("./handler/products");

router.post("/add_category", categoryHandler.addCategory);
router.post("/add_imageurl", categoryHandler.addImageUrl);

module.exports = router;
