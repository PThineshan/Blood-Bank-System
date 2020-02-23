const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//user schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  accountType: {
    type: String
  },
  gender: {
    type: String
  },
  email: {
    type: String
  },
  dob: {
    type: String
  },
  phoneNo: {
    type: Number
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  donorId: {
    type: String
  },
  bloodGroup: {
    type: String
  }
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.getUserByID = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
  const query = { username: username };
  //db.collection.findOne(query, projection)
  User.findOne(query, callback);
};
module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(error, salt) {
    bcrypt.hash(newUser.password, salt, function(error, hash) {
      if (error) throw error;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(error, isMatch) {
    if (error) throw error;
    callback(null, isMatch);
  });
};

module.exports.getUserCollecion = function(userType, callback) {
  User.find({ accountType: userType }, callback);
};
