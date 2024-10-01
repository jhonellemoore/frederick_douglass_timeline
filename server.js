// Import the necessary modules
const express = require('express');
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

// Define a basic route for the root URL
app.get('/', (req, res) => {
  res.send('Page for independent work project!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
