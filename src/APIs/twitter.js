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
    twitter.get("https://api.twitter.com/1.1/followers/ids.json", (err, data, response) => {
            res.status(200).send({ data });
        if (err) {
            console.error(err);
        }
    });
});

module.exports = app => app.use("/api", router); 