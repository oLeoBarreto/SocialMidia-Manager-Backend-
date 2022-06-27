const { Schema, model } = require("../database");

const reminderSchema = new Schema({
    title: {
        type: String,
        required: false,
        uppercase: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Reminder = model("Reminder", reminderSchema);

module.exports = Reminder;