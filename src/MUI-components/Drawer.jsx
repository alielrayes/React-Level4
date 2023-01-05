import { Divider, Drawer, Toolbar } from '@mui/material';
import React from 'react';

const Drawerr = ({drawerWidth}) => {
  return (
    <Drawer
        sx={{
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
      </Drawer>
  );
}

export default Drawerr;
