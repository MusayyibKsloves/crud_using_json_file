// const data = {
//    users: require('../userModel/userModel.json'),
//     setUser: function (data) { this.users = data }

// };

const users = require('../userModel/userData');

//----------------------------get Api---------------------


// const getAllUsers = (req, res) => {
//     res.json(data.users);
// }

const getAllUsers = async (req, res) => {
    const allUsers = await users.find();
    res.json(allUsers);
}

//----------------------------Post Api--------------------

// const addUser = (req, res) => {
//     const newUser = {
//         "id": data.users[data.users.length - 1].id + 1 || 1,
//         "name": req.body.name,
//         "mobile": req.body.mobile,
//         "email": req.body.email,
//         "address": req.body.address
//     }
//     data.setUser([...data.users, newUser]);
//     res.status(201).json(data.users);
// }


const addUser = async (req, res) => {
    try {
        const newUser = await users.create({
            "name": req.body.name,
            "mobile": req.body.mobile,
            "email": req.body.email,
            "address": req.body.address
        });
        res.status(201).json(newUser);
    }
    catch (err) {
        console.log(err);
    }

}

//--------------------------- update Api ----------------------------------

// const updateUser = (req, res) => {
//     const userData = data.users.find(user => user.id === parseInt(req.body.id));
//     if (!userData) {
//         return res.status(400).json(`user data on this Id ${req.body.id} not found`);
//     }

//     if (req.body.name) userData.name = req.body.name;
//     if (req.body.email) userData.email = req.body.email;
//     if (req.body.mobile) userData.mobile = req.body.mobile;
//     if (req.body.address) userData.address = req.body.address;
//     res.json(userData);
// }

const updateUser = async (req, res) => {

    const userData = await users.findOne({ _id: req.body.id }).exec();

    if (!userData) {
        return res.status(400).json(`user data on this Id ${req.body.id} not found`);
    }

    if (req.body?.name) userData.name = req.body.name;
    if (req.body?.email) userData.email = req.body.email;
    if (req.body?.mobile) userData.mobile = req.body.mobile;
    if (req.body?.address) userData.address = req.body.address;
    const userDataUpdate = await userData.save();
    res.json(userDataUpdate);
}

//--------------------------- delete Api -------------------------------------

// const deleteUser = (req, res) => {                   
//     res.json("id", req.body.id);
// }


const deleteUser = async (req, res) => {
    const userData = await users.findOne({ _id: req.body.id }).exec();

    if (!userData) {
        return res.status(400).json(`user data on this Id ${req.body.id} not found`);
    }
    const userDataDelete = await userData.deleteOne({ _id: req.body.id });
    res.json(userDataDelete);
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
}