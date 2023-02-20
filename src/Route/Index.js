import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Page from "../Component/Page";

export const RouteComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
};
