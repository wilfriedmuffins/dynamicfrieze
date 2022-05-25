import { useState } from "react";
import "./App.css";
import WeekInFrieze from "./components/WeekInFrieze/WeekInFrieze";
import Router from "./Router";

function App() {
  const [weeks, setWeeks] = useState([
    {
      name: "Semaine 1",
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 2",
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 3",
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 4",
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 5",
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
    {
      name: "Semaine 6",
      steps: ["La voie du codeur 2.0", "Prendre un bon départ"],
    },
  ]);
  return (
    <div className="App">
      <h1>Dynamic Frieze</h1>
      <div className="frieze">
        {weeks.map((week) => (
          <WeekInFrieze week={week} setWeeks={setWeeks} />
        ))}
      </div>
      <Router />
    </div>
  );
}

export default App;
