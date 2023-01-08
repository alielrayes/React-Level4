import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ali: {
              main: "#64748B",
            },

            favColor: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode
            ali: {
              main: "teal",
            },

            favColor: {
              main: grey[800],
            },
          }),
    },
  });

  const [noneORblock, setnoneORblock] = useState("none");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} setnoneORblock={setnoneORblock} />

        <Drawerr
          drawerWidth={drawerWidth}
          setmyMOde={setmyMOde}
          noneORblock={noneORblock}
        />

        <Box
          // className="border"
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
          // className="border"
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
