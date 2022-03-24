const express = require("express");
const Reminder = require("../models/reminder");
const router = express.Router();

router.post("/newReminder", async (req, res) => {
    try {
        const reminder = await Reminder.create(req.body);
        return res.status(200).send({ reminder });
    } catch (error) {
        return res.status(400).send({ error: "New reminder register failed!" });
    }
});

router.get("/reminder", (req, res) => {
    try {
        const reminder = await Reminder.find();
        return res.status(200).send(reminder)
    } catch (error) {
        return res.status(400).send({ error: "Error to finc a reminder"});
    }
});

module.exports = (app) => app.use(router);