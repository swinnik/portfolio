import React, { useState } from "react";
import axios from "axios";
import colorPalette from "../assets/data/colorPalette.js";
import resume from "../assets/data/resume.js";
import problems from "../assets/data/problems.js";

const OpenAIChatComponent = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeBold = (text, word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    return text.replace(regex, `<b>${word}</b>`);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/generate-response", {
        inputText,
        resume,
      });

      const processedResponse = makeBold(
        response.data.responseText,
        "Sean Winnik"
      );
      setResponseText(processedResponse);
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
            style={styles.option}
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
              {responseText.split("*").map((paragraph, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      marginBottom: "20px",
                      fontSize: "1em",
                      lineHeight: "1.5em",
                      backgroundColor: "white",
                      padding: "1em",
                      borderRadius: "1em",
                      boxShadow: "0px 0px 8px purple",
                    }}
                  >
                    <div>{paragraph}</div>
                  </div>
                );
              })}

              {/* <div dangerouslySetInnerHTML={{ __html: responseText }}></div> */}
            </>
          )
        )}
      </div>
      <div style={{ height: "100px" }} />
    </div>
  );
};

const styles = {
  section: {
    // top: 100,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: colorPalette.work,
    color: "black",
  },
  form: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    width: "100%",
    maxWidth: "500px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "15px 15px",
    // height: "55px",
  },

  button: {
    // height: "50px",
    border: "1px solid black",
    borderRadius: "5px",
    minWidth: "140px",
    padding: "15px 15px",
  },
  option: {
    cursor: "pointer",
    fontSize: "1.2em",
  },
};

export default OpenAIChatComponent;
