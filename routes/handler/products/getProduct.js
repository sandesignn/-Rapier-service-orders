const Category = require("../../../models/Category");
const Product = require("../../../models/Product");

module.exports = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ _id: id })
    .populate({
      path: "imageId",
      select: "_id imageUrl",
    })
    .populate({
      path: "categoryId",
      select: "_id name",
    });

  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "product not found",
    });
  }

  return res.json({
    status: "success",
    data: product,
  });
};
