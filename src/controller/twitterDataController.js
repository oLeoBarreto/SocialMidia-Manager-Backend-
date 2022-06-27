const express = require("express");
const routeTwitterData = express.Router();
const TwitterData = require("../models/TwitterData");

routeTwitterData.post("/", async (req, res) => {
  const { followers, friends } = req.body;

  const data = await TwitterData.create({
    followers,
    friends,
  });

  return res.json(data);
});

routeTwitterData.get("/data", async (req, res) => {
  const data = await TwitterData.find();
  res.json(data);
});

module.exports = app => app.use('/TwitterDataLastMonths', routeTwitterData);
