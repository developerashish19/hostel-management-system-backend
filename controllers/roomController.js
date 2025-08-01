// controllers/roomController.js
const Room = require('../models/Room');

// ➕ Add a new room
exports.createRoom = async (req, res) => {
  try {
    const { hostelId, roomNumber, category, furniture } = req.body;

    // Check if room number already exists in that hostel
    const existingRoom = await Room.findOne({ roomNumber, hostelId });
    if (existingRoom) {
      return res.status(400).json({ message: "Room already exists in this hostel" });
    }

    const room = await Room.create({ hostelId, roomNumber, category, furniture });

    res.status(201).json({ message: "Room added successfully", room });

  } catch (err) {
    res.status(500).json({ message: "Failed to add room", error: err.message });
  }
};

// 📄 Get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('hostelId', 'name type');
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch rooms", error: err.message });
  }
};

// 📄 Get rooms by hostel ID
exports.getRoomsByHostel = async (req, res) => {
  try {
    const { hostelId } = req.params;
    const rooms = await Room.find({ hostelId }).populate('hostelId', 'name type');
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch rooms", error: err.message });
  }
};
room.js