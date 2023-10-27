const express = require('express');
const router = express.Router();
const loginCustomerController = require('../controller/loginCustomerController');


router.route('/')
   .post(loginCustomerController.customerLogin);

  
  module.exports = router; 
