const mongoose = require('mongoose');
Schema = mongoose.Schema;

const userSchema = new Schema ({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email_address: {
        type: String,
        unique: true,
        required: true,
    },
    points: {
        type: String,
        required: true,
    },
}, {timestamps: true, collection: 'user_profiles'});

const User = mongoose.model('User', userSchema);
module.exports = User;