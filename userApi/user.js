const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const verifyJwt = require('../jwtMiddleware/jwtverify');


router.route('/')
    .get(verifyJwt, userController.getAllUsers)
    .post(userController.addUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);


module.exports = router; 
