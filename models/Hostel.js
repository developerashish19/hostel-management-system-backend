// models/Hostel.js
const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  type: {
    type: String,
    enum: ['boys', 'girls', 'general'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Hostel', hostelSchema);
