import React from "react";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";


const Root = () => {
  return (
    <div>
      <Typography gutterBottom noWrap variant="h4" component="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ipsum sunt voluptate possimus impedit fuga aliquid omnis explicabo, voluptatem quasi quisquam nemo repellat illo. Eum nisi modi ab labore voluptatibus.
      </Typography>



 <Typography variant="h4"  > aaaa </Typography>




      <Outlet />
    </div>
  );
};

export default Root;
