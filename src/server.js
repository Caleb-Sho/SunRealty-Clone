// server.js or app.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Use your existing server port

app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// Serve static files if needed (e.g., your React build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Define the endpoint to save JSON data
app.post('/api/save-data', (req, res) => {
  const { cardNumber, expirationDate, cvcCode } = req.body;

  // Validate data (basic validation for demonstration)
  if (!cardNumber || cardNumber.length !== 16 || !expirationDate || !cvcCode) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  // Construct a unique filename using the timestamp
  const timestamp = Date.now();
  const filename = `form-data-${timestamp}.json`;

  // Specify the path within your repository where the JSON file will be saved
  const filePath = path.join(__dirname, 'data', filename); // Assuming you have a 'data' folder

  // Create the data directory if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
  }

  // Prepare the data to be saved in JSON format
  const data = JSON.stringify({ cardNumber, expirationDate, cvcCode }, null, 2);

  // Write the JSON file to the server
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).json({ message: 'Failed to save data' });
    }
    console.log('Data saved successfully:', filename);
    res.status(200).json({ message: 'Data saved successfully', filename });
  });
});

// Listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
