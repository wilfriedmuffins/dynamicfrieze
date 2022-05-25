import React, { useState } from "react";
import { Link } from "react-router-dom";
import Step from "../../components/Step";
import "../../style/week.css";
import { useParams } from "react-router-dom";

export default function Week(props) {
  const { weekId } = useParams();

  const [weeks, setWeeks] = useState([
    {
      name: "Semaine 1",
      id: 1,
      steps: ["La voie du codeur 2.0", "Prendre un bon départ", "TEEEEST"],
    },
    {
      name: "Semaine 2",
      id: 2,
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 3",
      id: 3,
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 4",
      id: 4,
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 5",
      id: 5,
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 6",
      id: 6,
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
  ]);

  let week = {};
  weeks.map((w) => {
    if (w.id == weekId) {
      week = w;
    }
  });

  return (
    <div className="week">
      <Link to="/">Home</Link>
      <h1>{week.name}</h1>
      {week.steps.map((text) => (
        <Step text={text} />
      ))}
    </div>
  );
}
