// server.js
const express = require('express');
const path = require('path'); // Module to work with file paths

const app = express();
const port = 3000;

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
