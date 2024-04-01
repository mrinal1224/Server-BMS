const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Route for Register

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      res.send({
        success: true,
        message: "user already Exists",
      });
    }

    const newUser = await User(req.body);
    await newUser.save(); // saves the data in the database

    res.send({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
