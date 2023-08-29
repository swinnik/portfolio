import React from "react";
import colorPalette from "../assets/data/colorPalette.js";
import Header from "./Header.jsx";
import Bio from "./Bio.jsx";
import Work from "./Work.jsx";
import OpenAi from "./OpenAi.jsx";

const App = () => {
  return (
    <div style={styles.app}>
      {/* <Header /> */}
      {/* <Bio /> */}
      <OpenAi />
      {/* <Work /> */}
    </div>
  );
};

export default App;

const styles = {
  app: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: colorPalette.text1,
  },
};
