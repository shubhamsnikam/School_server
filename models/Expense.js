const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: { type: String, enum: ['Monthly', 'Yearly'], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Expense', expenseSchema);
