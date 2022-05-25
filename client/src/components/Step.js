import React, { useState } from "react";
import "../style/week.css";
import CheckBox from "../style/SVG/CheckBox";
import CheckBoxFill from "../style/SVG/CheckBoxFill";

function Step({ text }) {
  const [check, setCheck] = useState(false);

  let bgStep = "";
  let colorStep = "";
  check ? (bgStep = "rgb(78,98,239)") : (bgStep = "rgba(194, 199, 208, 0.62)");
  check ? (colorStep = "white") : (colorStep = "black");
  return (
    <div className="step" style={{ backgroundColor: bgStep, color: colorStep }}>
      <h3>{text}</h3>
      {!check ? (
        <CheckBox className="checkBox" onClick={() => setCheck(true)} />
      ) : (
        <CheckBoxFill
          className="checkBoxFill"
          onClick={() => setCheck(false)}
        />
      )}
    </div>
  );
}

export default Step;
