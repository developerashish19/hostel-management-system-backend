// models/Record.js
const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },

  stayDuration: {
    type: String,
    required: true
  },

  feePaid: {
    type: Boolean,
    default: false
  },

  leaveRequested: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Record', recordSchema);
