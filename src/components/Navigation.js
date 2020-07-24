import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(...props) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/singup">Sing Up</Link>
      <Link to="/notice">notice</Link>
    </div>
  );
}

export default Navigation;
