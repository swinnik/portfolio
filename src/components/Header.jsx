import React from "react";
import instaImage from "../assets/images/icons8-instagram-50.png";

const Header = () => {
  const handleNameClick = () => {
    const newLink = "https://github.com/swinnik";
    window.open(newLink, "_blank");
  };
  const handleContactClick = () => {
    const gmailComposeLink =
      "https://mail.google.com/mail/?view=cm&to=Dapope.townsend@gmail.com&subject=Your%20Subject&body=Hi%20Daniel,";
    window.open(gmailComposeLink, "_blank");
  };

  const handleInstaClick = () => {
    const newLink = "https://www.instagram.com/panieldope/";
    window.open(newLink, "_blank");
  };

  return (
    <div style={styles.header}>
      <div style={styles.leftHeader}>
        <div onClick={handleNameClick} style={{ cursor: "pointer" }}>
          Sean Winnik
        </div>
        <div onClick={handleInstaClick} style={{ cursor: "pointer" }}>
          <img style={styles.insta} src={instaImage} alt="instagram logo" />{" "}
        </div>
        <div onClick={handleContactClick} style={{ cursor: "pointer" }}>
          {" "}
          Contact{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;

const styles = {
  header: {
    position: "fixed",
    zIndex: 99,
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    backgroundColor: "black",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
  },

  leftHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "20%",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },

  insta: {
    color: "#fff",
    backgroundColor: "white",
    borderRadius: "25%",
    height: "1.5em",
  },
};
