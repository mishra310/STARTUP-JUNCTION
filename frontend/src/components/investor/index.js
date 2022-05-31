import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Investor = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Investor;
