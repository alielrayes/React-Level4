import React from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";

const drawerWidth = 240;
const Root = () => {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />

      <Drawerr drawerWidth={drawerWidth} />

      <Outlet />
    </div>
  );
};

export default Root;
