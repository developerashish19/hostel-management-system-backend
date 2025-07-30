// models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hostelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel',
    required: true
  },

  roomNumber: {
    type: String,
    required: true,
    unique: true
  },

  category: {
    type: String,
    enum: ['single', 'double', 'triple'],
    required: true
  },

  details: {
    fan: { type: Number, default: 1 },
    table: { type: Number, default: 1 },
    chair: { type: Number, default: 1 },
    bed: { type: Number, default: 1 }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);
