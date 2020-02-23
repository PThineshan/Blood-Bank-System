const mongoose = require("mongoose");

const bloodBankSchema = mongoose.Schema({
  bankName: {
    type: String,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  address: {
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
  fax: {
    type: String,
    required: true
  }
});

const bloodBank = (module.exports = mongoose.model(
  "BloodBank",
  bloodBankSchema
));

module.exports.recordBank = function(details, callback) {
  details.save(callback);
};

module.exports.getBank = function(details, callback) {
  bloodBank.find(details, callback);
};
