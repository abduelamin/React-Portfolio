import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    document.title = "Elamin Portfolio";
  }, []);
  return (
    <header>
      <nav>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
