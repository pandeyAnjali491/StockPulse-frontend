import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../styles/dashboard.css";
import Home from "./dashboard/Home.jsx";
import Summary from "./dashboard/Summary.jsx";
import Orders from "./dashboard/Orders.jsx";
import Holdings from "./dashboard/Holdings.jsx";
import Positions from "./dashboard/Positions.jsx";
import Funds from "./dashboard/Funds.jsx";

export default function Dashboardmain() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Summary />} />
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="funds" element={<Funds />} />
      </Route>
    </Routes>
  );
}

