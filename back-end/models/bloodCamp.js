const mongoose = require("mongoose");

const bloodCampSchema = mongoose.Schema({
  district: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

const bloodCamp = (module.exports = mongoose.model(
  "BloodCamp",
  bloodCampSchema
));

module.exports.recordCamp = function(details, callback) {
  details.save(callback);
};

module.exports.getCamp = function(details, callback) {
  bloodCamp.find(details, callback);
};
