const express = require("express");
var router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Contact = require("../models/contact");
const config = require("../config/database");

//register
router.post("/register", (req, res) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    accountType: req.body.accountType,
    email: req.body.email,
    dob: req.body.dob,
    gender: req.body.gender,
    address: req.body.address,
    city: req.body.city,
    phoneNo: req.body.phoneNo,
    username: req.body.username,
    password: req.body.password,
    bloodGroup: req.body.bloodGroup
  });

  User.addUser(newUser, function(error, user) {
    if (error) {
      res.json({ success: false, msg: "Failed to register user" });
    } else {
      res.json({ success: true, msg: "User registered" });
    }
  });
});

//Authenticate
router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (error, user) => {
    if (error) throw error;
    if (!user) {
      return res.json({ success: false, msg: "user not found" });
    }

    User.comparePassword(password, user.password, function(error, isMatch) {
      if (error) throw error;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 3600
        });

        res.json({
          success: true,
          token: token,
          user: {
            id: user._id,
            accountType: user.accountType,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: "wrong password" });
      }
    });
  });
});

router.post("/addContact", function(req, res) {
  let contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });
  Contact.saveRecord(contact, function(error) {
    if (error) {
      res.json({ success: false, msg: "Failed to record request" });
    } else {
      res.json({ success: true, msg: "Blood Bank recorded" });
    }
  });
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    //console.log("Here usersjs");
    //console.log(req.user);
    res.json({ user: req.user });
  }
);
module.exports = router;
