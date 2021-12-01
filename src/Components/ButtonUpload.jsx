import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";


const Input = styled("input")({
  display: "none"
});

const UploadButton = styled(Button)(() => ({
  color: "#FFFFFF",
  padding: "10px",
  width: "229px",
  fontWeight: "500",
  borderRadius: "9px",
  backgroundColor: "#FF5353",
  textTransform: "unset",
  textDecoration: "none",
  boxShadow: "none",
  marginTop: "24px",
  fontFamily:'Poppins',
  "&:hover": {
    backgroundColor: "#ff5e5e",
    boxShadow: "none"
  }
}));

export default function ButtonUpload() {
  return (
    <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" multiple type="file" />
      <UploadButton variant="contained" component="span">
        Change Header Photo
      </UploadButton>
    </label>
  );
}
