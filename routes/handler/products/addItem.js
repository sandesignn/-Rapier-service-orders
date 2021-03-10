const User = require("../../../models/Item");
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        title: 'string|empty:false',
        price: 'number|empty:false',
        description: 'string|empty:false',
        categoryId: 'string|empty:false',
        imageId: 'string|empty:false',
        stok: 'number|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }


    const password = await bcrypt.hash(req.body.password, 10);
    const { name, email, phoneNumber, avatar } = req.body;

    const createdUser = await User.create({ name: name, email: email, password: password, phoneNumber: phoneNumber, avatar: avatar });

    return res.json({
        status: 'success',
        data: {
            id: createdUser.id
        }
    })
}