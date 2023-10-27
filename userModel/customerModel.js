const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customer = new Schema({

    customerName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('customer', customer);