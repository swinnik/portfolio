// backend/server.js
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "../dist")));

// Define API routes here if needed
// app.get('/api/data', (req, res) => {
//   // Handle API request
// });
//

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
