const express = require("express");
const path = require("path");
const axios = require("axios"); // Import the axios library
const bodyParser = require("body-parser"); // Import body-parser
const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "../dist")));

// Add body-parser middleware
app.use(bodyParser.json());

// API route for generating OpenAI response
app.post("/api/generate-response", async (req, res) => {
  const { inputText } = req.body;

  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Make sure to set up your API key

  const requestData = {
    model: "gpt-3.5-turbo",
    messages: [
      // ...
    ],
    temperature: 0.7,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      requestData,
      { headers }
    );

    // Process the response data as needed
    const formattedText = response.data.choices[0].message.content
      .split("- ")
      .map((item) => item.trim())
      .slice(1);

    res.json({ responseText: formattedText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
