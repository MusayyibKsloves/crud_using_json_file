const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDbData = new Schema({
    name: String,
    mobile: String,
    email: String,
    address: String
});
 
module.exports = mongoose.model('UserDbData', userDbData);