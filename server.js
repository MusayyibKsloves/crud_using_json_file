const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbConnect = require('./dbConnection/dbConnect');
const userDbData = require('./userModel/userData');
const customer = require('./userModel/customerModel');
app.use(express.json());

dbConnect();

const PORT = process.env.PORT || 4500;

app.use('/users', require('./userApi/user'));
app.use('/customers', require('./customerRouter/customerApi'));
app.use('/login', require('./customerRouter/loginCustomer'));

app.listen(PORT, () => {
    console.log(`server is running on Port: ${PORT} !`);
})