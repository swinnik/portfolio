const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json());

app.post("/api/generate-response", async (req, res) => {
  const { inputText } = req.body;

  try {
    const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `In reference to ..., come up with a business model... ${inputText}`,
        },
      ],
      temperature: 0.7,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      requestData,
      { headers }
    );

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
