require('dotenv/config');
const express = require("express");
const Twit = require("twit");

const router = express.Router();

var twitter = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

router.get("/twitter", (req, res) => {
    try {
        twitter.get("https://api.twitter.com/2/lists/:id/followers", (err, data, response) => {
            res.status(200).send({ data });
        });
    } catch (err) {
        res.status(400).send({ error: "Bad request" });
    }
});

module.exports = app => app.use("/api", router); 