import pkg from 'mongoose';
const { Schema } = pkg;

const userSchema = new Schema ({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
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

export const User = pkg.model('User', userSchema);