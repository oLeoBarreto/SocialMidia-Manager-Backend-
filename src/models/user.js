const mongoo = require('../database');

const UserSchema = new mongoo.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
    password: {
        type: String,
        required: false,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoo.model("User", UserSchema);

module.exports = User;