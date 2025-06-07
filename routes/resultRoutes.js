const express = require('express');
const router = express.Router();
const { saveResult, getAllResults } = require('../controllers/resultController');

router.get('/', getAllResults);
router.post('/', saveResult);

module.exports = router;
