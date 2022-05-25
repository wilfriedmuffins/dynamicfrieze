import React from "react";
import "./WeekInFrieze.css";
import { Link } from "react-router-dom";

export default function WeekInFrieze({ week }) {
  return (
    <Link to="/">
      <div className="weekInFrieze">{week.name}</div>
    </Link>
  );
}
