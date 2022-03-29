const mongoo = require("../database");

const reminderSchema = new mongoo.Schema({
    title: {
        type: String,
        required: false,
        uppercase: true,
    },
    tag: [String],
    dateHour: {
        type: Date,
    },
    participants: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Reminder = mongoo.model("Reminder", reminderSchema);

module.exports = Reminder;