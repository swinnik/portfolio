import React from "react";
import colorPalette from "../assets/data/colorPalette.js";

const Footer = () => {
  const handleNameClick = () => {
    const newLink = "https://linkedin.com/in/seanwinnik";
    window.open(newLink, "_blank");
  };

  const handleOenAPIClick = () => {
    const newLink = "https://platform.openai.com/";
    window.open(newLink, "_blank");
  };

  return (
    <div style={styles.footer}>
      <div style={styles.text} onClick={handleNameClick}>
        Created by Sean Winnik{" "}
      </div>
      <div style={styles.text} onClick={handleOenAPIClick}>
        {" "}
        Made with the OpenAI API Completion endpoint
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    position: "fixed",
    zIndex: 99,
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100px",
    backgroundColor: colorPalette.work,
    borderTop: `1px solid #279EFF`,
    color: "#279EFF",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
  },
  text: {
    cursor: "pointer",
    color: "blue",
  },
};
