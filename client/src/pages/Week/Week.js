import React, { useState } from "react";
import { Link } from "react-router-dom";
import Step from "../../components/Step";
import "../../style/week.css";
import { useParams } from "react-router-dom";
import Home from "../../style/SVG/Home";

export default function Week(props) {
  const { weekId } = useParams();

  const [weeks, setWeeks] = useState([
    {
      name: "Semaine 1",
      id: 1,
      steps: [
        { title: "La voie du codeur 2.0", completed: false },
        { title: "La voie du codeur 2.0", completed: false },
        { title: "La voie du codeur 2.0", completed: false },
      ],
    },
    {
      name: "Semaine 2",
      id: 2,
      steps: [
        { title: "La voie du codeur 2.0", completed: false },
        { title: "La voie du codeur 2.0", completed: false },
      ],
    },
    {
      name: "Semaine 3",
      id: 3,
      steps: [
        { title: "La voie du codeur 2.0", completed: false },
        { title: "La voie du codeur 2.0", completed: false },
      ],
    },
    {
      name: "Semaine 4",
      id: 4,
      steps: [
        { title: "La voie du codeur 2.0", completed: false },
        { title: "La voie du codeur 2.0", completed: false },
      ],
    },
    {
      name: "Semaine 5",
      id: 5,
      steps: [
        { title: "La voie du codeur 2.0", completed: false },
        { title: "La voie du codeur 2.0", completed: false },
      ],
    },
    {
      name: "Semaine 6",
      id: 6,
      steps: [
        { title: "La voie du codeur 2.0", completed: false },
        { title: "La voie du codeur 2.0", completed: false },
      ],
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
      <Link to="/">
        <Home className="homeSvg" />
      </Link>
      <h1>{week.name}</h1>
      {week.steps.map((step) => (
        <Step setWeeks={setWeeks} step={step} />
      ))}
    </div>
  );
}
