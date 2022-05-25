import "./App.css";
import WeekInFrieze from "./components/WeekInFrieze/WeekInFrieze";

function App() {
  return (
    <div className="App">
      <h1>Dynamic Frieze</h1>
      <div className="frieze">
        <WeekInFrieze />
        <WeekInFrieze />
        <WeekInFrieze />
        <WeekInFrieze />
        <WeekInFrieze />
      </div>
    </div>
  );
}

export default App;
