import React from "react";
import "./input.css";
import Rank from "./Rank";

function Input({ onInputChange, onSubmit }) {
  return (
    <div className="input-content">
      <Rank />
      <div className="input-container">
        <input className="input" onChange={onInputChange} />
        <button className="button" onClick={onSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
}

export default Input;
