const express = require("express");
const Reminder = require("../models/reminder");
const router = express.Router();

// == POST == //

router.post("/newReminder", async (req, res) => {

    const { title, tags, dateHour } = req.body;
    //const loggedUser = req.session.user._id;

    try {
        const reminder = await Reminder.create({
            title: title,
            tag: tags,
            dateHour: dateHour,
            //user: loggedUser,
        });
        return res.status(201).send({ reminder });
    } catch (error) {
        return res.status(400).send({ error: "Failed to register a new reminder | " + error });
    }
});

// == GET == //

router.get("/getReminders", async (req, res) => {
    try {
        const reminder = await Reminder.find();
        return res.status(200).send(reminder);
    } catch (error) {
        return res.status(400).send({ error: "Error to find a reminder" });
    }
});

module.exports = (app) => app.use('/reminder', router);