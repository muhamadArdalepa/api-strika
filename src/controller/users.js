const UsersModel = require('../models/users');
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessages: error
        })
    }
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new user success'
    })
}

const updateUser = (req, res) => {
    const { id } = req.params
    console.log("id User : ", id);
    res.json({
        message: "UPDATE data user berhasil",
        data: req.body
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser
}