const { Schema, model } = require("../database");

const twitterDataSchema = new Schema({
    followers: {
        type: Number,
        required: true,
    },
    friends: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    }
});

const TwitterData = model('TwitterData', twitterDataSchema);

module.exports = TwitterData;