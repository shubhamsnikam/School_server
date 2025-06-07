const express = require('express');
const router = express.Router();
const { getAllEntries, addEntry } = require('../controllers/cashEntryController');

router.get('/', getAllEntries);
router.post('/', addEntry);

module.exports = router;
