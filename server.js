const express = require('express');
const app = express();
app.use(express.json());


const PORT = process.env.PORT || 4500;

app.use('/users', require('./userApi/user'));

app.listen(PORT, () => {
    console.log(`server is running on Port: ${PORT} !`);
})