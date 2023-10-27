const customer = require('../userModel/customerModel');

const bcrypt = require('bcrypt');


//------------------------------------start Post Api ------------------------------------------

const customerRegister = async (req, res) => {

    const { customerName, email, password } = req.body;
    
    if(!email || !password) return res.status(400).json({ 'message': 'email and password are required !'});

    const checkDuplicate = await customer.findOne( {email}).exec();
    console.log(checkDuplicate);
    if(checkDuplicate) return res.status(409).json({ 'message': 'email already register !'});

    try{
          const pass = await bcrypt.hash(password, 10);
          const customerData = await customer.create({
              "customerName": customerName,
               "email": email,
               "password": pass

          });
          res.status(201).json({'message':'customer register successfully !'});
          
    }
    catch(err)
    {
      console.log(err);
    }
}
//------------------------------------------end Post Api ------------------------------------------


module.exports = { customerRegister };