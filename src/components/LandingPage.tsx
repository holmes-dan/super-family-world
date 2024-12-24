import React from "react";
import logo from "../assets/superFamilyWorld.svg";
import landingBackground from "../assets/landingBackground.jpg";
import "../App.css";

const LandingPage = () => {
  return (
    <div
      className="Landing-page"
      style={{
        backgroundImage: `url(${landingBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default LandingPage;
