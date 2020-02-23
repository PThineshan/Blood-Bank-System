const express = require("express");
const router = express.Router();
const bloodCamp = require("../models/bloodCamp");

router.get("/getBloodCamp", function(req, res) {
  bloodCamp.getCamp({}, (error, data) => {
    if (error) throw error;
    res.json(data);
  });
});

module.exports = router;
