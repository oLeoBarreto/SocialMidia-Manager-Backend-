const mongoo = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        required: false,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', async (next) => {
    const hash = await bcrypt.hash(this.password, saltRounds).then((hash) => this.password = hash );
   
    next();
});

const User = mongoo.model("User", UserSchema);

module.exports = User;