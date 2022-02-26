const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: "User",
    primaryKey: "_id",
    propertis: {
        _id: "uuid",
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;