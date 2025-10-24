import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpApp from "./EmpApp";
import CreateUsers from "./CreateUsers";

function EmpRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpApp />} />
        <Route path="/create" element={<CreateUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EmpRoute;
