import React from "react";
import "../style/week.css";

function Step({ text }) {
  return (
    <div className="step">
      <input type="checkbox"></input>
      <h3>{text}</h3>
    </div>
  );
}

export default Step;
