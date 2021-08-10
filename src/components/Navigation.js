import React from "react";
import Tilt from "react-tilt";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="nav-content">
        <Link to="/signin">signOut</Link>
      </div>
      <Link className="tilt-container" to="/">
        {" "}
        <Tilt
          className="Tilt"
          options={{
            speed: 300,
            max: 25,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
        >
          <div className="Tilt-inner"></div>
        </Tilt>
      </Link>
    </div>
  );
}

export default Navigation;
