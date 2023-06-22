const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = "SELECT * FROM users";
    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users 
                        VALUE(null,'${body.role}','${body.name}','${body.alamat}','${body.telp}')`;
    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllUsers,
    createNewUser
}