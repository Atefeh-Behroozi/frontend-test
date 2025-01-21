import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.svg";
import "./header.css";

const Header = () => {
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
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="SPARK Logo" className="logo" />
      </div>

      <ul className="nav">
        {isMobile ? (
          <>
            <li><a href="https://example.com/help">Help</a></li>
            <li><a href="https://example.com/faq">FAQ</a></li>
            <li><a href="https://example.com/about">About</a></li>
          </>
        ) : (

          <>
            <li><a href="https://example.com/help">Hjælp</a></li>
            <li><a href="https://example.com/faq">FAQ</a></li>
            <li><a href="https://example.com/about">Om</a></li>
          </>
        )}
      </ul>

      <a href="https://example.com/preorder" className="order">
        {isMobile ? "Preorder" : "Forudbestilling"}
      </a>
    </header>
  );
};

export default Header;




