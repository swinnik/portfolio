import React, { useEffect, useState } from "react";
import workCollection from "../assets/data/work.js";
import colorPalette from "../assets/data/colorPalette.js";

const Work = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  console.log(workCollection);
  return (
    <div style={styles.section}>
      <div style={{ position: "sticky", top: 0, left: 0 }}>
        <div style={{ height: "100px", backgroundColor: colorPalette.bio }} />
        <div
          style={{
            ...styles.sectionTitle,
            backgroundColor: isMobile ? colorPalette.work : "transparent",
            boxShadow: isMobile
              ? "5px 5px 20px -10px rgba(0,0,0,0.75)"
              : "none",
          }}
        >
          Work
        </div>
      </div>
      <div style={styles.entries}>
        {/* {workCollection &&
          workCollection.map((work) => (
            <div style={styles.entry} key={work.title}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <div style={styles.title}>{work.title}</div>
                </a>
                <div style={styles.date}>{work.date}</div>
              </div>
              <div style={styles.publication}>{work.publication}</div>
              <div style={styles.content}>{work.content}</div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Work;

const styles = {
  section: {
    top: 100,
    backgroundColor: colorPalette.work,
  },
  sectionTitle: {
    fontSize: "4em",
    fontWeight: "lighter",
    // position: "sticky",
    top: 0,
    left: 0,
    paddingLeft: "1%",
  },
  entries: {
    fontSize: "3em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  entry: {
    // border: "1px solid #fff",
    padding: "2% 0px",
    margin: "0px 0px 20px 0px",
    width: "70%",
    fontSize: "24px",
    fontWeight: "lighter",
  },

  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  publication: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0px 5px 0 ",
    // textAlign: "right",
  },
  date: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  content: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};
