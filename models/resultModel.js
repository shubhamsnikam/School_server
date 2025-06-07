const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subject: String,
  marksObtained: Number,
  maxMarks: Number,
});

const resultSchema = new mongoose.Schema({
  name: String,
  className: String,
  rollNo: String,
  subjects: [subjectSchema],
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);
