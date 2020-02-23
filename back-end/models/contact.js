const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const contact = (module.exports = mongoose.model("Contact", contactSchema));

module.exports.saveRecord = function(details, callback) {
  details.save(callback);
};
