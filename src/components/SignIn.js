import React from "react";
import "./signin.css";

function SignIn({ onRouteChange }) {
  return (
    <div className="signin">
      <h1>sign in</h1>
      <form>
        <input placeholder="name" type="text" />
        <input placeholder="email" type="email" />
        <button onClick={() => onRouteChange("home")}>sign up</button>
        <button onClick={() => onRouteChange("Register")}>Register</button>
      </form>
    </div>
  );
}

export default SignIn;
