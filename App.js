import React, { useState, useEffect } from "react";
import "./App.css";
import Motorcycle from "./assets/img/bmw-r80-bobber.jpg";
import heatRight from "./assets/img/doodle_heat_right.svg";
import heatLeft from "./assets/img/doodle_heat_left.svg";
import light from "./assets/img/doodle_light.svg";
import Arrow from "./assets/img/doodle_arrow.svg";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    
      <main className="main">
        {isMobile ? (
 
          <div className="text-section">
            <h1>
              THE ULTIMATE <br />
              MODERN BATTERY FOR <br />
              ANY MOTORCYCLE
            </h1>
            <p>
              Whether you're running a vintage, building your perfect
              <br /> café racer, or just making your daily motorcycle as
              <br /> reliable as it can be.
            </p>
            <p className="price">
              We got you covered from <span>€99</span>
            </p>
            <button className="preorder-button">PREORDER</button>
            <img src={Arrow} alt="arrow" className="arrow" />
          </div>
        ) : (
         
          <div className="text-section">
            <h1>
              DET ULTIMATIVE <br />
              MODERNE BATTERI TIL <br />
              ENHVER MOTORCYKEL
            </h1>
            <p>
              Uanset om du kører en vintage, bygger din perfekte
              <br /> café racer eller bare gør din daglige motorcykel som
              <br /> pålidelig som det kan være.
            </p>
            <p className="price">
              Vi fik dig dækket fra <span>€99</span>
            </p>
            <button className="preorder-button">FORUDBESTILLING</button>
            <img src={Arrow} alt="arrow" className="arrow" />
          </div>
        )}
        <div className="image-section">
          <img src={Motorcycle} alt="BMW R80 Bobber" />
          <img src={light} alt="BMW R80 Bobber" className="top-light" />
          <img src={heatLeft} alt="Left Heat" className="arrow-left" />
          <img src={heatRight} alt="Right Heat" className="arrow-right" />
        </div>
      </main>
  
  );
};

export default App;
