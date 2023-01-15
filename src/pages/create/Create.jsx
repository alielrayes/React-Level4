import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ price, title }) => {
    price = Number(price);
    fetch("http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, title }),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      sx={{ width: "380px" }}
      component="form"
    >
      <TextField
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title", {
          required: { value: true, message: "Requires field" },
          minLength: { value: 3, message: "minumn length is 3" },
        })}
        error={Boolean(errors.title)}
        helperText={
          Boolean(errors.title) ? errors.title?.message.toString() : null
        }
      />

      <TextField
        error={Boolean(errors.price)}
        helperText={
          Boolean(errors.price) ? errors.price?.message.toString() : null
        }
        {...register("price", {
          required: { value: true, message: "Required filed" },
        })}
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
        type="submit"
        onClick={(params) => {}}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
