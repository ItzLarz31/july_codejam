import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Made with Vite & React <span className="footer__heart">🧡</span> by
        {
          " Briana Orsini, Lalla Blue, Mujaahid, and Shawn Dishman. 2024 Summer CodeJam "
        }
      </p>
    </footer>
  );
};

export default Footer;
