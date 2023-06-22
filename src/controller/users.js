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

const createNewUser = async (req, res) => {
    const { body } = req;
    try {
        await UsersModel.createNewUser(body);
        res.json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessages: error
        })
    }

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