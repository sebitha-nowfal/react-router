import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <NavLink className="navbar-brand" to="/">MyApp</NavLink>
      <div className="navbar-nav">
        <NavLink 
          className={({ isActive }) => 
            "nav-link" + (isActive ? " active" : "")
          } 
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => 
            "nav-link" + (isActive ? " active" : "")
          } 
          to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
}
