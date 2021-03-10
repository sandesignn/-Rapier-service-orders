const User = require("../../../models/Category");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: "string|empty:false",
    desc: "string|empty:false",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const { name, desc } = req.body;

  const createCategory = await User.create({ name: name, desc: desc });

  return res.json({
    status: "success",
    data: {
      id: createCategory.id,
    },
  });
};
