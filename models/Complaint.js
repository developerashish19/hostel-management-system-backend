// models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  message: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ['maintenance', 'discipline', 'other'],
    default: 'other'
  },

  status: {
    type: String,
    enum: ['open', 'resolved'],
    default: 'open'
  }
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);
