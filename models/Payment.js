// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvcCode: { type: String, required: true }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
