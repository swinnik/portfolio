import React from "react";
import colorPalette from "../assets/data/colorPalette.js";

const Bio = () => {
  return (
    <div style={styles.bio}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.licdn.com/dms/image/D5603AQGQMqcVAQiAgA/profile-displayphoto-shrink_200_200/0/1692220347001?e=1698278400&v=beta&t=_8XG4w8kYgjPqp8qV_qjnzN8B5DvAiyE7jI8laMZQ-Q"
            style={styles.profileImage}
          />
          <div style={styles.h1}> Sean Winnik</div>
        </div>
        <div style={styles.p}>
          {" "}
          Sean Winnik is a software engineer, deploying modern and intuitive
          applications for the web. <br /> He is a graduate of Wesleyan
          University with a Master's in Neuroscience.
        </div>
      </div>
    </div>
  );
};

export default Bio;

const styles = {
  h1: {
    fontSize: "6em",
  },
  p: {
    fontSize: "1.3em",
    fontFamily: "sans-serif",
  },

  bio: {
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorPalette.bio,
    padding: "5% 5%",
  },
  profileImage: {
    height: "15rem",
    borderRadius: "50%",
    marginLeft: "10%",
    margin: "5% 0",
    boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.75)",
  },
};
