const express = require('express');
const router = express.Router();
const { createHostel, getAllHostels } = require('../controllers/hostelController');

// POST: Add a new hostel
router.post('/add', createHostel);

// GET: List all hostels
router.get('/', getAllHostels);

module.exports = router;
