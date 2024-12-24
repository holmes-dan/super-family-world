import React from "react";
import LandingPage from "./components/LandingPage.tsx";
import logo from "./assets/sfw.svg";

function App() {
  return (
    <>
      <head>
        <title>Super Family World</title>
        <link rel="icon" type="image/x-icon" href={`${logo}`} />
      </head>
      <div className="App">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
