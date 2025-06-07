const mongoose = require('mongoose');

const cashEntrySchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CashEntry', cashEntrySchema);
