const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');

router.route('/')
   .post(customerController.customerRegister);


module.exports = router;