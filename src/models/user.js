const mongoo = require('../database');
const bcrypt = require('bcrypt');

const UserSchema = new mongoo.Schema({
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
});

UserSchema.pre('save', async (next) => {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoo.model("User", UserSchema);

module.exports = User;