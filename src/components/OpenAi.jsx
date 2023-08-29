import React, { useState } from "react";
import axios from "axios";
import colorPalette from "../assets/data/colorPalette.js";
import resume from "../assets/data/resume.js";

const OpenAIChatComponent = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;


  const handleButtonClick = () => {
    setIsLoading(true); // Set loading state

    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `In reference to ${resume}, come up with a business model, or a solution to a problem that includes Sean Winnik as an instrumental aspect of that business/solution. ${inputText}
          the response should be organized with bullet points, and should be concise in each bullet point.
          I do not want just a recitation of the resume, but to come up with an answer that fluently includes Sean Winnik into the solution`,
        },
      ],
      temperature: 0.7,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    };

    axios
  .post("/api/generate-response", requestData)
  .then((response) => {
    // Handle the response from the server
    // Update responseText and other necessary state
  })
  .catch((error) => {
    console.error("Error:", error);
    setResponseText("An error occurred.");
  })
  .finally(() => {
    setIsLoading(false);
  });

  return (
    <div style={styles.section}>
      <input
        type="text"
        placeholder="Enter business model or problem description"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={styles.input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleButtonClick();
          }
        }}
      />
      <button onClick={handleButtonClick}>Generate Response</button>
      <div>
        <h2>Response:</h2>
        {isLoading ? (
          <div>ChatGPT is thinking...</div>
        ) : (
          <ul>{responseText}</ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  section: {
    top: 100,
    backgroundColor: colorPalette.work,
    color: "black",
    padding: "10px",
  },
  input: {
    width: "50%",
    padding: "10px",
    marginBottom: "10px",
    marginRight: "10px",
  },
};

export default OpenAIChatComponent;
