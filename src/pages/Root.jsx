import React from "react";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Delete } from "@mui/icons-material";
import { IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Root = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>


     


          <Link   sx={{ flexGrow: 1, textDecoration: "none" }} color="inherit" href="/">  My expenses  </Link>


         

          <Button color="inherit">Login</Button>


        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default Root;
