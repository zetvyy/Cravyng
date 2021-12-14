import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Checkout from "../checkout-cart/checkout-cart";

const ButtonCart = styled(Button)(() => ({
  color: "#FFFFFF",
  padding: "10px",
  width: "333px",
  fontWeight: "bold",
  borderRadius: "9px",
  backgroundColor: "#FF5353",
  textTransform: "unset",
  textDecoration: "none",
  boxShadow: "none",
  marginLeft: "23px",
  "&:hover": {
    backgroundColor: "#ff5e5e",
    boxShadow: "none",
  },
}));

export default function ButtonAddCart() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Checkout />
      <ButtonCart variant="contained" onClick={() => toggleMenu()}>
        Add to Cart
      </ButtonCart>
      ;
    </>
  );
}
