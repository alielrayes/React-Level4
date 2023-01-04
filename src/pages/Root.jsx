import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>MY Header</header>

      <Outlet />
    </div>
  );
};

export default Root;
