const customer = require('../userModel/customerModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const customerLogin = async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'email and password are required !' });

    const checkCustomer = await customer.findOne({ email }).exec();
    if (!checkCustomer) return res.status(404).json({ 'message': 'customer is not present,Please register before the login' });

    const checkpass = await bcrypt.compare(password, checkCustomer.password);
    console.log(checkpass);
    if (checkpass) {

        const accessToken = jwt.sign(
            { "email": checkCustomer.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '40s' }
        );
        const refreshToken = jwt.sign(
            { "email": checkCustomer.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken });
        // res.status(200).json({' customer' : `${checkCustomer.customerName} Login successfully ` })
    }
    else {
        res.status(401).json({ 'message': 'password not matched !' });
    }



}


module.exports = { customerLogin };