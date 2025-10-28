import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpApp from "./EmpApp";
import CreateUsers from "./CreateUsers";
import EditUser from "./EditUser";

function EmpRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpApp />} />
        <Route path="/create" element={<CreateUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EmpRoute;
