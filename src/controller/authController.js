const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const emailWorker = require('../services/emailSender');

// == POST == //

router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const hash = await bcrypt.hash(password, 10);

    try {
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: "Users already exist!" });
        }

        const user = await User.create({
            name: name,
            email: email,
            password: hash,
        });
        user.password = undefined;

        return res.status(201).send({ user: user });
    } catch (err) {
        return res.status(400).send({ error: "Register failed!", response: err });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email}).select('+password');

    if (!user) {
        return res.status(400).send({ error: "User not found!" });
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.send({ error: "Invalid password!" });
    }

    user.password = undefined;
    req.session.user = user;
    res.send({ user: user });

});

// == GET == //

router.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).send('No user find.')
    }
});
    
// == DELETE == //

router.delete("/deleteUser/:ID", async (req, res) => {
    try {
        let { ID } = req.params;
        const deletedUser = await Reminder.findByIdAndDelete(ID);
        return res.status(200).send({ msg: "User deleted!" });
    } catch (error) {
        res.status(400).send({ error: "Can't delete the user", response: error });
    }
});

module.exports = app => app.use('/auth', router);