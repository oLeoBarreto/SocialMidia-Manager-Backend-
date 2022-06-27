const express = require("express");
const Reminder = require("../models/reminder");
const router = express.Router();

// == POST == //

router.post("/newReminder", async (req, res) => {

    const { title, description, date } = req.body;

    try {
        const reminder = await Reminder.create({
            title,
            description,
            date,
        });
        return res.status(201).send({ reminder: reminder });
    } catch (error) {
        return res.status(400).send({ error: "Failed to register a new reminder", response: error });
    }
});

// == GET == //

router.get("/getReminders", async (req, res) => {
    try {
        const getReminders = await Reminder.find();
        return res.json(getReminders);
    } catch (error) {
        return res.status(400).send({ error: "Error to find a reminder", response: error });
    }
});

// == DELETE == //

router.delete("/deleteReminder/:ID", async (req, res) => {
    try {
        let { ID } = req.params;
        const deleteReminder = await Reminder.findByIdAndDelete(ID);
        return res.status(200).send({ msg: "Reminder deleted!" });
    } catch (error) {
        res.status(400).send({ error: "Can't delete the reminder", response: error });
    }
});

module.exports = (app) => app.use('/reminder', router);