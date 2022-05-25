import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frieze from "./pages/Frieze/Frieze";
import Login from "./pages/Login/Login";
import Week from "./pages/Week/Week";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" to element={<Frieze />} />
        <Route path="/week/:weekId" to element={<Week />} />
        <Route path="/login" to element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
