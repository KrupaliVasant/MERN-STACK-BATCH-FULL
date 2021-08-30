// /api/v1/user.entity.js

const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');//for encryption
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        lowercase: true,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});


// UserSchema.pre('save', function (next) {
//     user = this;
//     if (this.isModified('password') || this.isNew) {
//         // compare password or token
//         console.log("user data : " + user);
//     } else {
//         next();
//     }
// });
module.exports = mongoose.model('user', UserSchema, 'UserProfile');