// controller file, calls service

const userService = require('./user.service');

const loginUser = (userDetails) => {
    return userDAO.loginUser(userDetails)
}

const registerUser = (userDetails) => {
    return userDAO.registerUser(userDetails)
}

module.exports = {
    loginUser, registerUser
}