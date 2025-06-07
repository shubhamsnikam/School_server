const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  amount: Number,
  description: String,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Transaction', transactionSchema);