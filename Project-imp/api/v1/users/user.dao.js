const UserModel = require('./user.entity');

const loginUser = (userInfo) => {
    console.log("Login User");
}

const registerUser = (userInfo) => {
    console.log("Register User");
    // save()
}

module.exports = {
    loginUser, registerUser
}