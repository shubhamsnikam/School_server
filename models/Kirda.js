const mongoose = require('mongoose');

const kirdaSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  description: String,
  amount: Number,
});

module.exports = mongoose.model('Kirda', kirdaSchema);
