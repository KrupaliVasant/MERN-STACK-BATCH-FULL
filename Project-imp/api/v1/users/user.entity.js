// entity file, schema description

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.Model('user', 'UserSchema');