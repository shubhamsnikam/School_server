const express = require('express');
const router = express.Router();
const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

// Create
router.post('/', addStudent);

// Read
router.get('/', getStudents);

// Update
router.put('/:id', updateStudent);

// Delete
router.delete('/:id', deleteStudent);

module.exports = router;
