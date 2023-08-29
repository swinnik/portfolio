import React, { useState } from "react";
import axios from "axios";
import colorPalette from "../assets/data/colorPalette.js";
import resume from "../assets/data/resume.js";

const OpenAIChatComponent = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true); // Set loading state

    try {
      const response = await axios.post("/api/generate-response", {
        inputText,
        resume,
      });

      setResponseText(response.data.responseText);
    } catch (error) {
      console.error("Error:", error);
      setResponseText(["An error occurred."]);
    } finally {
      setIsLoading(false);
    }
  };

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
          <ul>
            {responseText.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
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
