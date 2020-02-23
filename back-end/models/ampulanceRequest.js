const mongoose = require("mongoose");

const ampulanceRequestSchema = mongoose.Schema({
  ampulance: {
    type: String,
    required: true
  },
  patient: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  charge: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  rtime: {
    type: String,
    required: true
  },
  dtime: {
    type: String,
    required: true
  }
});

const ampulanceRequest = (module.exports = mongoose.model(
  "AmpulanceRequest",
  ampulanceRequestSchema
));

module.exports.recordAmpulanceRequest = function(request, callback) {
  request.save(callback);
};

module.exports.getAmpulanceRequest = function(requests, callback) {
  ampulanceRequest.find(requests, callback);
};
