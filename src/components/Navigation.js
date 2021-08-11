import React from "react";
import Tilt from "react-tilt";
import "./Nav.css";
// import { Link } from "react-router-dom";

function Navigation({ onRouteChange }) {
  return (
    <div className="navigation-container">
      <div className="nav-content">
        <button onClick={() => onRouteChange("signin")}>signOut</button>
      </div>
      <h2 className="tilt-container">
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
      </h2>
    </div>
  );
}

export default Navigation;
