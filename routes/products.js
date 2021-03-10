const express = require("express");
const router = express.Router();

const categoryHandler = require("./handler/products");

router.post("/add_category", categoryHandler.addCategory);
router.post("/add_imageurl", categoryHandler.addImageUrl);
router.post("/add_product", categoryHandler.addProduct);
router.get("/:id", categoryHandler.getProduct);
router.get("/", categoryHandler.getProducts);

module.exports = router;
