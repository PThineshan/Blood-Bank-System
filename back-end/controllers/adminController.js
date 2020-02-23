const express = require("express");
const router = express.Router();
const bloodRequest = require("../models/blood-request");
const BloodBank = require("../models/bloodBank");
const BloodCamp = require("../models/bloodCamp");
const Ampulance = require("../models/ampulance");
const AmpulanceRequest = require("../models/ampulanceRequest");

router.get("/getBloodRequests", function(req, res) {
  bloodRequest.find({}, function(err, request) {
    if (err) {
      console.log(err);
    } else {
      res.json(request);
    }
  });
});

router.put("/updateBloodRequest", (req, res) => {
  var updateRequest = req.body;
  bloodRequest.updateRequest(updateRequest.id, updateRequest, function(err) {
    if (err) {
      res.json({ success: false, msg: "Failed to record request" });
    } else {
      res.json({ success: true, msg: "Blood Request recorded" });
    }
  });
});

router.get("/bloodRequest", function(req, res) {
  bloodRequest.getBloodRequest({}, (error, requests) => {
    if (error) throw error;
    res.json({ requests });
  });
});

router.post("/addBloodBank", function(req, res) {
  let details = new BloodBank({
    bankName: req.body.bankName,
    hospitalName: req.body.hospitalName,
    district: req.body.district,
    address: req.body.address,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    fax: req.body.fax
  });
  BloodBank.recordBank(details, function(error) {
    if (error) {
      res.json({ success: false, msg: "Failed to record request" });
    } else {
      res.json({ success: true, msg: "Blood Bank recorded" });
    }
  });
});

router.post("/addBloodCamp", function(req, res) {
  let details = new BloodCamp({
    district: req.body.district,
    address: req.body.address,
    date: req.body.date,
    time: req.body.time
  });
  BloodCamp.recordCamp(details, function(error) {
    if (error) {
      res.json({ success: false, msg: "Failed to record request" });
    } else {
      res.json({ success: true, msg: "Blood Bank recorded" });
    }
  });
});

router.post("/addAmpulance", function(req, res) {
  let details = new Ampulance({
    ampulanceId: req.body.ampulanceId,
    regNo: req.body.regNo,
    driverName: req.body.driverName,
    address: req.body.address,
    phoneNo: req.body.phoneNo,
    description: req.body.description
  });
  Ampulance.recordAmpulance(details, function(error) {
    if (error) {
      res.json({ success: false, msg: "Failed to record request" });
    } else {
      res.json({ success: true, msg: "Ampulance recorded" });
    }
  });
});

router.get("/getAmpulance", function(req, res) {
  Ampulance.getAmpulance({}, (error, details) => {
    if (error) throw error;
    res.json({ details });
  });
});

router.post("/addAmpulanceRequest", function(req, res) {
  let request = new AmpulanceRequest({
    ampulance: req.body.ampulance,
    patient: req.body.patient,
    address: req.body.address,
    charge: req.body.charge,
    date: req.body.date,
    rtime: req.body.rtime,
    dtime: req.body.dtime
  });
  AmpulanceRequest.recordAmpulanceRequest(request, function(error) {
    if (error) {
      res.json({ success: false, msg: "Failed to record request" });
    } else {
      res.json({ success: true, msg: "Ampulance request recorded" });
    }
  });
});

router.get("/getAmpulanceRequest", function(req, res) {
  AmpulanceRequest.getAmpulanceRequest({}, (error, requests) => {
    if (error) throw error;
    res.json({ requests });
  });
});

module.exports = router;
