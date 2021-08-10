import React from "react";
import "./signin.css";

function SignIn() {
  return (
    <div className="signin">
      <form>
        <input placeholder="name" type="text" />
        <input placeholder="email" type="email" />
        <button>sign up</button>
      </form>
    </div>
  );
}

export default SignIn;
