const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  type: {
    type: String,
    enum: ['Leaving', 'Transfer', 'Bonafide'],
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  admissionDate: {
    type: Date
  },
  leavingDate: {
    type: Date
  },
  reasonForLeaving: {
    type: String
  },
  conduct: {
    type: String
  }
});

module.exports = mongoose.model('Certificate', certificateSchema);
