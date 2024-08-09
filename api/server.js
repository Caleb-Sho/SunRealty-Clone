const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Use CORS middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://sun-realty-clone-8omhnrcu4-caleb-shokes-projects.vercel.app'], // Allow both local and production origins
  methods: ['GET', 'POST'], // Specify the allowed methods
  allowedHeaders: ['Content-Type'], // Specify the allowed headers
}));

app.use(bodyParser.json());

// Path to JSON data storage
const dataFilePath = path.join(__dirname, 'data/formData.json');

// Route to save form data as JSON
app.post('/api/save-data', (req, res) => {
  const { cardNumber, expirationDate, cvcCode } = req.body;

  if (!cardNumber || cardNumber.length !== 16 || !expirationDate || !cvcCode) {
    console.error('Invalid data received:', req.body);
    return res.status(400).json({ message: 'Invalid data' });
  }

  const newFormData = { cardNumber, expirationDate, cvcCode };

  // Read existing data from the JSON file
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data file:', err);
      return res.status(500).json({ message: 'Failed to read data file' });
    }

    let formDataArray = [];
    if (data) {
      formDataArray = JSON.parse(data);
    }

    // Add the new form data
    formDataArray.push(newFormData);

    // Write the updated data back to the JSON file
    fs.writeFile(dataFilePath, JSON.stringify(formDataArray, null, 2), (err) => {
      if (err) {
        console.error('Error saving data:', err);
        return res.status(500).json({ message: 'Failed to save data' });
      }
      console.log('Data saved successfully:', newFormData);
      res.status(200).json({ message: 'Data saved successfully' });
    });
  });
});

module.exports = app;
