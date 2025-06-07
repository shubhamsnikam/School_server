const CashEntry = require('../models/cashEntryModel');

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await CashEntry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entries' });
  }
};

exports.addEntry = async (req, res) => {
  try {
    const entry = new CashEntry(req.body);
    const saved = await entry.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error saving entry' });
  }
};
