const Result = require('../models/resultModel');

exports.saveResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    const saved = await result.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error saving result' });
  }
};

exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching results' });
  }
};
