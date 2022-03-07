const express = require('express');
const router = express.Router();
const User = require('../models/user');

//FIXME: Try nao funciona, esta apenas retornando erro
router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: "Users already exist!" });
        }

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: "Register failed!" });
    }
});

module.exports = app => app.use('/auth', router);