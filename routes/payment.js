// routes/payment.js
const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const { getDatabase } = require('../api/mongo');

router.post('/save-data', async (req, res) => {
  const { cardNumber, expirationDate, cvcCode } = req.body;

  if (!cardNumber || !expirationDate || !cvcCode) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const db = getDatabase();
    const result = await db.collection('payments').insertOne({
      cardNumber,
      expirationDate,
      cvcCode
    });

    res.status(201).json({ message: 'Data saved successfully', data: result });
  } catch (error) {
    console.error('Error saving data', error);
    res.status(500).json({ message: 'Failed to save data' });
  }
});

module.exports = router;
