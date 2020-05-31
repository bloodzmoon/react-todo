import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav id="nav">
      <NavLink exact to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/todo" className="nav-item">
        Todo
      </NavLink>
    </nav>
  );
};
