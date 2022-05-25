import { useState } from "react";
import "./Frieze.css";
import WeekInFrieze from "../../components/WeekInFrieze/WeekInFrieze";

function App() {
  const [weeks, setWeeks] = useState([
    {
      name: "Semaine 1",
      id: 1,
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
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
  return (
    <div className="pageFrieze">
      <h1>Dynamic Frieze</h1>
      <div className="frieze">
        {weeks.map((week, index) => (
          <WeekInFrieze key={index} week={week} setWeeks={setWeeks} />
        ))}
        <div className="fleche"></div>
      </div>
    </div>
  );
}

export default App;
