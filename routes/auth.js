const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup Form
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

// Signup POST
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.send("Username or Email already exists. Try a different one.");
      }
      const user = new User({ username, email, password });
      await user.save();
      req.session.user = {
        _id: user._id,
        username: user.username,
        email: user.email // You can store the email as well
      };
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Signup failed.");
    }
  });

// Login Form
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// Login POST
// Login POST
// Login POST
router.post("/login", async (req, res) => {
    const { identifier, password } = req.body; // identifier can be email or username
    try {
      const user = await User.findOne({
        $or: [{ username: identifier }, { email: identifier }]
      });
  
      if (!user) return res.send("Invalid username/email or password");
  
      const isMatch = await user.comparePassword(password);
      if (!isMatch) return res.send("Invalid username/email or password");
  
      req.session.user = {
        _id: user._id,
        username: user.username,
        email: user.email
      };
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Login failed.");
    }
  });
  
  

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;