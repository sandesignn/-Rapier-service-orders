const User = require("../../../models/Image");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    imageUrl: "string|empty:false",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const { imageUrl } = req.body;

  const createImageUrl = await User.create({ imageUrl: imageUrl });

  return res.json({
    status: "success",
    data: {
      id: createImageUrl.id,
    },
  });
};
