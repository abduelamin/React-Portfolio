import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/abdullahelamin/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/abduelamin"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a
        href="https://drive.google.com/file/d/1qryCeDHnB2Oj01dDcIYku5-RQuNFUbJj/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download Resume</button>
      </a>
    </footer>
  );
};

export default Footer;