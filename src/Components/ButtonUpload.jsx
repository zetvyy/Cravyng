import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { updateProfile } from "../redux/action/authAction";
import { useDispatch } from "react-redux";
import { Modal, Box,Typography} from "@mui/material";
import { useState } from 'react';
import loadingLogo from './Card_payment/assets/Group 4615.svg'

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
  fontFamily: "Poppins",
  "&:hover": {
    backgroundColor: "#ff5e5e",
    boxShadow: "none"
  }
}));



export default function ButtonUpload() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    fontFamily: 'Poppins',
    textAlign: 'center',
  };

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateProfile(e.target.files[0]));
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  };

  return (
    //button
    <>
    <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={e => handleChange(e)} />
      <UploadButton variant="contained" component="span">
        Change Header Photo
      </UploadButton>
    </label>

    {/* loading loading */}
    <Modal
        open={loading}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography            
          >
            <img src={loadingLogo} alt="" />
            <Typography>
              Uploading image...
            </Typography>
          </Typography>
        
      </Box>
      </Modal>
    </>
  );
}
