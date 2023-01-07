import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import React from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.ali.main,
    scale: "0.99"
  },
}));

const Create = () => {
  // Why <<<component="form">>> ?
  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        fullWidth={true}
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton sx={{ mt: "22px" }} variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
