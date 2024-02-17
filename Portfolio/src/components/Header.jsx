import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  useEffect(() => {
    document.title = "Elamin Portfolio";
  }, []);
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ProjectGallery">Project Gallery</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
      <div>
        <button>Theme</button>
      </div>
    </header>
  );
};

export default Header;

// Chnge the theme button to an icon
