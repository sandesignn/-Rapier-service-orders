const Order = require("../../../models/Order");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = async (req, res) => {
  const schema = {
    userId: "string|empty:false",
    productId: "string|empty:false",
    invoice: "string|empty:false",
    address: "string|empty:false",
    shipment: "string|empty:false",
    total: "number|empty:false",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const {
    userId,
    productId,
    orderDate,
    invoice,
    address,
    shipment,
    total,
    payment,
  } = req.body;

  const newOrder = {
    userId,
    productId,
    orderDate,
    invoice,
    address,
    shipment,
    total,
    payment,
  };

  const createdOrder = await Order.create(newOrder);

  return res.json({
    status: "success",
    data: {
      id: createdOrder.id,
    },
  });
};
