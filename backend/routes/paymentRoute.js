//routes/paymentRoute.js

const express = require('express');
const router = express.Router();
const Payment = require('../models/payments');

// POST route to save payment data
router.post('/save', async (req, res) => {
    const { cardNumber, expirationDate, cvcCode } = req.body;

    try {
        const newPayment = new Payment({
            cardNumber,
            expirationDate,
            cvcCode
        });

        await newPayment.save();
        res.status(201).json({ message: 'Payment data saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving payment data', error });
    }
});

module.exports = router;
