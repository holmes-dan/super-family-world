import React from "react";
import logo from "../assets/superFamilyWorld.svg";
import landingBackground from "../assets/landingBackground.jpg";

const LandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${landingBackground})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <img
        src={logo}
        className="h-16vmin top-20 pointer-events-none absolute"
        alt="Super Family World"
      />
      {/* <button class="text-black font-bold py-2 px-4 rounded bottom-60 absolute"> */}
      {/*   Holmes */}
      {/* </button> */}
    </div>
  );
};

export default LandingPage;
