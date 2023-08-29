import React, { useState } from "react";
import axios from "axios";
import colorPalette from "../assets/data/colorPalette.js";
import resume from "../assets/data/resume.js";
import problems from "../assets/data/problems.js";

const OpenAIChatComponent = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState(null);
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
        {isLoading ? (
          <>
            <h2>Response:</h2>
            <div>Thinking of a solution...</div>
          </>
        ) : (
          responseText && (
            <>
              <h2>Response:</h2>
              <div>{responseText}</div>
            </>
          )
        )}
      </div>
    </div>
  );
};

const styles = {
  section: {
    // top: 100,
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "10px",
    backgroundColor: colorPalette.work,
    color: "black",
    padding: "15%",
  },
  form: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    width: "60%",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "8px 8px",
    minHeight: "40px",
  },

  button: {
    // height: "50px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "12px 12px",
  },
};

export default OpenAIChatComponent;
