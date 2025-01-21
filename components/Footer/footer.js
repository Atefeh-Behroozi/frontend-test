import React, { useState, useEffect } from "react";
import "./footer.css";
import BikeExif from "../../assets/img/media_bikeexif.png";
import Greasy from "../../assets/img/Greasy.png";
import ChopCult from "../../assets/img/media_chopcult.png";
import Pipeburn from "../../assets/img/media_pipeburn.png";

const Footer = () => {
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
    <footer className="footer">
      <p>{isMobile ? "As seen in" : "Som set i"}</p>
      <div className="brands">
        <img src={BikeExif} alt="BikeExif" className="brand-logo" />
        <img src={Pipeburn} alt="Pipeburn" className="brand-logo" />
        <img src={Greasy} alt="Greasy Culture" className="brand-logo" />
        <img src={ChopCult} alt="Chop Cult" className="brand-logo" />
      </div>
    </footer>
  );
};

export default Footer;

