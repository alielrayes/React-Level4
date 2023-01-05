import React from "react";
import { Outlet } from "react-router-dom";
import { Toolbar, AppBar, Avatar, Link, Typography } from "@mui/material";

const Root = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              "&:hover": { fontSize: "16.5px" },
            }}
            color="inherit"
            href="/"
          >
            My expenses
          </Link>

          <Typography mr={2} variant="body1" color="inherit">
            Ali Hassan
          </Typography>

          <Avatar alt="Remy Sharp" src="./imges/Ali Hassan.JPG" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default Root;
