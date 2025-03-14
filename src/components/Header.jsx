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
      </nav>
    </header>
  );
};

export default Header;
