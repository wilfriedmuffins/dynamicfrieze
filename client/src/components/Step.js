import React, { useState } from "react";
import "../style/week.css";

function Step({ step }) {
  const [checked, setChecked] = useState(step.completed);

  function handleChange() {
    setChecked(!checked);
  }
  return (
    <div className="step">
      <input type="checkbox" checked={checked} onChange={handleChange}></input>
      <h3>{step.title}</h3>
    </div>
  );
}

export default Step;
