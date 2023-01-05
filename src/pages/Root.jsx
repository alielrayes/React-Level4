import React from "react";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Root = () => {
  return (
    <div>
      <Typography color="secondary.main" variant="h4">
        Ali hassan
      </Typography>

      <Outlet />
    </div>
  );
};

export default Root;
