const mongoose = require("mongoose");

const ampulanceSchema = mongoose.Schema({
  ampulanceId: {
    type: String,
    required: true
  },
  regNo: {
    type: String,
    required: true
  },
  driverName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },

  phoneNo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const ampulance = (module.exports = mongoose.model(
  "Ampulance",
  ampulanceSchema
));

module.exports.recordAmpulance = function(details, callback) {
  details.save(callback);
};

module.exports.getAmpulance = function(details, callback) {
  ampulance.find(details, callback);
};
