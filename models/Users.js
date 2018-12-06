const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    cheeseUrl: [String],
    credits: Number
});

module.exports = mongoose.model('users', userSchema);