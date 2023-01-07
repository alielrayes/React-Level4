import React from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { Box } from "@mui/material";

const drawerWidth = 240;
const Root = () => {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />

      <Drawerr drawerWidth={drawerWidth} />

      <Box
        sx={{
          ml: `${drawerWidth}px`,
          display: " flex",
          justifyContent: "center",
          mt: "66px"
        }}
       
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
