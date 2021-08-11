import React from "react";
import "./Register.css";

function Register({ onRouteChange }) {
  return (
    <div className="Register">
      <h1>Register</h1>
      <form>
        <input placeholder="name" type="text" />
        <input placeholder="name" type="text" />{" "}
        <input placeholder="name" type="text" />
        <input placeholder="email" type="email" />
        <button onClick={() => onRouteChange("home")}>Register</button>
      </form>
    </div>
  );
}

export default Register;
