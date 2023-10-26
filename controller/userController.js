const data = {
    users: require('../userModel/userModel.json'),
    setUser: function (data) { this.users = data }

};


const getAllUsers = (req, res) => {
    res.json(data.users);
}

const addUser = (req, res) => {
    const newUser = {
        "id": data.users[data.users.length - 1].id + 1 || 1,
        "name": req.body.name,
        "mobile": req.body.mobile,
        "email": req.body.email,
        "address": req.body.address
    }
    data.setUser([...data.users, newUser]);
    res.status(201).json(data.users);
}

const updateUser = (req, res) => {
    const userData = data.users.find(user => user.id === parseInt(req.body.id));
    if (!userData) {
        return res.status(400).json(`user data on this Id ${req.body.id} not found`);
    }

    if (req.body.name) userData.name = req.body.name;
    if (req.body.email) userData.email = req.body.email;
    if (req.body.mobile) userData.mobile = req.body.mobile;
    if (req.body.address) userData.address = req.body.address;
    res.json(userData);
   }

const deleteUser = (req, res) => {
    res.json("id", req.body.id);
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
}