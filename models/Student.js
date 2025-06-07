const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  parentName: String,
  dob: Date,
  className: String,
  address: String,
  admissionDate: Date,
  aadharNumber: String,
  contactNumber: String,

});

module.exports = mongoose.model('Student', studentSchema);
