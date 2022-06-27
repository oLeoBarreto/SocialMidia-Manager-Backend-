const express = require("express");
const routeAvatar = express.Router();
const path = require("path");
const fs = require("fs");
const User = require("../models/user");
const uploadConfig = require("../config/upload");

routeAvatar.put("/avatar/:userId", async (req, res) => {
  const { userId } = req.params;
  const { avatarFilename } = req.file?.filename.toString();

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).send('User no found!');
  }


});
