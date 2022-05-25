import React from "react";
import "./WeekInFrieze.css";
import { Link } from "react-router-dom";

export default function WeekInFrieze({ week }) {
  return (
    <Link to={"/week/" + week.id} className="weekInFrieze">
      {week.name}
    </Link>
  );
}
