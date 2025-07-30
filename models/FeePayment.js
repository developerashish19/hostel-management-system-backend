// models/FeePayment.js
const mongoose = require('mongoose');

const feePaymentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  method: {
    type: String,
    enum: ['cash', 'upi', 'card', 'netbanking'],
    required: true
  },

  status: {
    type: String,
    enum: ['paid', 'pending'],
    default: 'paid'
  },

  paidOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FeePayment', feePaymentSchema);
