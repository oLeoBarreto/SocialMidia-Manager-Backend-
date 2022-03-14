const express = require("express");
const reminder = require("../models/reminder");
const router = express.Router();

router.post("/newReminder", (req, res) => {

});

router.get("/reminder", (req, res) => {

});

module.exports = (app) => app.use(router);