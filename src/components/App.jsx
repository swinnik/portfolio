import React from "react";
import colorPalette from "../assets/data/colorPalette.js";
import Header from "./Header.jsx";
import Bio from "./Bio.jsx";
import Work from "./Work.jsx";

const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <Bio />
      <Work />
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;

const styles = {
  app: {
    position: "absolute",
    top: 0,
    left: 0,
    color: colorPalette.text1,
  },
};
