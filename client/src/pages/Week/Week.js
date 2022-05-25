import React from "react";
import { Link } from "react-router-dom";
import Step from "../../components/Step";
import "../../style/week.css";

export default function Week() {
  const week = [
    "Voie du codeur 2.0",
    "Prendre un bon départ",
    "L’art de résoudre des problèmes",
    "Les blocs élementaires du code",
    "Mettre en place l’environnement de travail ",
    "Travailler avec language de programmation",
  ];

  return (
    <div className="week">
      <Link to="/">Home</Link>
      <h1>Semaine 1</h1>
      {week.map((text) => (
        <Step text={text} />
      ))}
    </div>
  );
}
