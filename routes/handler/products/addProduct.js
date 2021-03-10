const Product = require("../../../models/Product");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    title: "string|empty:false",
    price: "number|empty:false",
    desc: "string|empty:false",
    categoryId: "string|empty:false",
    imageId: "string[]|empty:false",
    stok: "number|empty:false",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const { title, price, desc, categoryId, imageId, stok } = req.body;
  const newProduct = {
    title,
    price,
    desc,
    categoryId,
    imageId,
    stok,
  };

  const createdProduct = await Product.create(newProduct);

  return res.json({
    status: "success",
    data: {
      id: createdProduct.id,
    },
  });
};
