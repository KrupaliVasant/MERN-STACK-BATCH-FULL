const UserModel = require('./user.entity');

const loginUser = (userInfo) => {
    console.log("Login User")  //we can write our code functionality here
    // mongoose code, return sme value
}
const registerUser = async (userInfo) => {
    console.log("Register User")
    //save()
    // mongoose code
    // create instance
    var userObje = new UserModel({ 
        userId: `${userInfo.userId}`, 
        userName: `${userInfo.userName}`, 
        password: `${userInfo.password}` 
    });
    await userObje.save((err, userInfo) => {
        if (err) {
            console.log("Sorry");
        } else {
            console.log("Data instance" + userInfo);
        }
    });
}
module.exports = {
    loginUser, registerUser
}