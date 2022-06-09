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

router.get("/Followers", (req, res) => {
    twitter.get("https://api.twitter.com/1.1/followers/list.json", (err, data, response) => {
        let followersNumber = data.users.length;
        res.json(followersNumber);

        if (err) {
            res.status(400).send({ error: "Error of get method! ", response: response });
        }
    });
});

router.get("/Friends", (req, res) => {
    twitter.get("https://api.twitter.com/1.1/friends/list.json", (err, data, response) => {
        let friendsNumber = data.users.length;
        res.json(friendsNumber);

        if (err) {
            res.status(400).send({ error: "Error of get method! ", response: response });
        }
    });
});

module.exports = app => app.use("/api/twitter", router); 