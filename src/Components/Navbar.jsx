import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 bg-white flex items-center justify-center  shadow-md rounded-lg   font-bold "
      >
        <p className="blue-gradient_text">AK</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          📖 About
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          📓 Projects
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
