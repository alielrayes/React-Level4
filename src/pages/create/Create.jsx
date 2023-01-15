import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.ali.main,
    scale: "0.99",
  },
}));

const Create = () => {
  const [title, settitle] = useState("");
  const [titleErroe, settitleErroe] = useState(false);
  const [price, setprice] = useState(0);
  const [priceError, setpriceError] = useState(false);
  const navigate = useNavigate();

  // Why <<<component="form">>> ?
  return (
    <Box autoComplete="off" sx={{ width: "380px" }} component="form">
      <TextField
        onChange={(eo) => {
          settitle(eo.target.value);
        }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        error={titleErroe}
      />

      <TextField
      error={priceError}
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        fullWidth={true}
        label=" Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        type="number"
      />

      <ColorButton
        onClick={(params) => {
          settitleErroe(true)
          setpriceError(true)

          if (title) {
            settitleErroe(false)
          }

          if (price) {
            setpriceError(false)
          }



          if (title.trim()) {
            fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),
          }).then(() => {
            navigate("/");
          });
          }
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
