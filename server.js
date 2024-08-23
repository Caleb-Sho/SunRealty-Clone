// server.js
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./api/mongo');
const paymentRoutes = require('./routes/payment');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/api', paymentRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
