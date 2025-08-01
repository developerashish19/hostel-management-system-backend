const express = require('express');
const router = express.Router();
const {
  createRoom,
  getAllRooms,
  getRoomsByHostel
} = require('../controllers/roomController');

// POST: Add room
router.post('/add', createRoom);

// GET: All rooms
router.get('/', getAllRooms);

// GET: Rooms by hostel ID
router.get('/hostel/:hostelId', getRoomsByHostel);

module.exports = router;
