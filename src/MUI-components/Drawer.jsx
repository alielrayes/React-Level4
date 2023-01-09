import { Divider, Drawer, List, useTheme, IconButton } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";

const Drawerr = ({  drawerWidth, setmyMOde, noneORblock, drawerType, hideDrawer }) => {
  const currentLocation = useLocation();

  const navigate = useNavigate();
  const theme = useTheme();




const myList = [
  {text: "Home", icon: "ffffff", path: "/" }
]










  return (
    <Drawer
      sx={{
        display: {xs: noneORblock, sm: "block", },

        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer()
      }}
    >
      <List
       
      >
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          disablePadding
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );

              setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

        <Divider />




        <ListItem
          sx={{
            bgcolor:
              currentLocation.pathname === "/"
                ? // @ts-ignore
                  theme.palette.favColor.main
                : null,
          }}
          disablePadding
        >
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem
          sx={{
            bgcolor:
              currentLocation.pathname === "/create"
                ? // @ts-ignore
                  theme.palette.favColor.main
                : null,
          }}
          disablePadding
        >
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2 />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        
        
        
        
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
