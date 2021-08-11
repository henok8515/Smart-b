import "./input.css";

function Input({ onInputChange, onSubmit, onRankChange }) {
  return (
    <div className="input-content">
      <div>
        <h1>{"Henok"}</h1>
        <p>henok your current rank is {onRankChange}</p>
      </div>
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
