const mongoose = require('mongoose');

const url = 'mongodb+srv://mgdb:root@cluster0.hk5an6a.mongodb.net/?retryWrites=true&w=majority';

const dbConnect = async () => {
    try {
        await mongoose.connect(url)
        .then(() => { console.log('connected !') })
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = dbConnect;