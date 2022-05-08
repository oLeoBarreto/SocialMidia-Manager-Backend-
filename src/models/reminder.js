const { Schema, model } = require("../database");

const reminderSchema = new Schema({
    title: {
        type: String,
        required: false,
        uppercase: true,
    },
    tag: [String],
    dateHour: {
        type: Date,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Reminder = model("Reminder", reminderSchema);

module.exports = Reminder;