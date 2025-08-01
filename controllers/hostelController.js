// controllers/hostelController.js
const Hostel = require('../models/Hostel');

// ➕ Add a new hostel
exports.createHostel = async (req, res) => {
  try {
    const { name, type } = req.body;

    // Check if hostel already exists
    const existing = await Hostel.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Hostel already exists" });
    }

    const hostel = await Hostel.create({ name, type });
    res.status(201).json({ message: "Hostel created successfully", hostel });

  } catch (err) {
    res.status(500).json({ message: "Failed to create hostel", error: err.message });
  }
};

// 📄 Get all hostels
exports.getAllHostels = async (req, res) => {
  try {
    const hostels = await Hostel.find();
    res.status(200).json(hostels);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch hostels", error: err.message });
  }
};
