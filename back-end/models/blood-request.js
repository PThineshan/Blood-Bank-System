const mongoose = require("mongoose");

const bloodRequestSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  reqDate: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  status: {
    type: String
  }
});

const bloodRequest = (module.exports = mongoose.model(
  "bloodRequest",
  bloodRequestSchema
));

module.exports.recordRequest = function(request, callback) {
  request.save(callback);
};

module.exports.updateRequest = function(id, request, callback) {
  bloodRequest.updateOne({ _id: id }, request, { new: true }, callback);
};

module.exports.getBloodRequest = function(request, callback) {
  bloodRequest.find(request, callback);
};
