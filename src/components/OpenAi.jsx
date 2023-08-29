import React, { useState } from "react";
import axios from "axios";
import colorPalette from "../assets/data/colorPalette.js";
import resume from "../assets/data/resume.js";
import problems from "../assets/data/problems.js";

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
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      setResponseText(["An error occurred."]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.section}>
      <h1>Problem Solver</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter a problem..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleButtonClick();
            }
          }}
        />
        <button style={styles.button} onClick={handleButtonClick}>
          Solve Problem
        </button>
      </div>
      {problems.map((problem) => {
        return (
          <h3
            key={problem}
            onClick={setInputText.bind(this, problem)}
            style={{ cursor: "pointer" }}
          >
            {problem}
          </h3>
        );
      })}
      <div>
        <h2>Response:</h2>
        {isLoading ? (
          <div>Thinking of a solution...</div>
        ) : (
          <div>{responseText}</div>
        )}
      </div>
    </div>
  );
};

const styles = {
  section: {
    // top: 100,
    // width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: colorPalette.work,
    color: "black",
    border: "1px solid black",
    padding: "15%",
  },
  input: {
    width: "80%",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px 10px",
    minHeight: "40px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  button: {
    height: "50px",
    border: "1px solid black",
    borderRadius: "5px",
  },
};

export default OpenAIChatComponent;
