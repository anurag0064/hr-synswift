const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    location: String,
    gender: String,
    maritalStatus: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
