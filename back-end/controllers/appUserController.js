const express = require("express");
var router = express.Router();
const BloodRequest = require("../models/blood-request");
const user = require("../models/user");

router.get("/getDonorDetails", function(req, res, next) {
  const acType = "Donor";
  user.getUserCollecion(acType, (error, data) => {
    if (error) throw error;
    res.json(data);
  });
});

//register
router.post("/bloodRequest", (req, res) => {
  let request = new BloodRequest({
    patientName: req.body.patientName,
    bloodGroup: req.body.bloodGroup,
    city: req.body.city,
    reqDate: req.body.reqDate,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    hospitalName: req.body.hospitalName,
    address: req.body.address,
    purpose: req.body.purpose
  });

  BloodRequest.recordRequest(request, function(error, user) {
    if (error) {
      res.json({ success: false, msg: "Failed to record request" });
    } else {
      res.json({ success: true, msg: "Blood Request recorded" });
    }
  });
});

module.exports = router;
