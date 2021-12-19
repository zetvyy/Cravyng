import { styled } from "@mui/material/styles";
import {useHistory} from 'react-router-dom';
import { Button, Modal, Box, Typography} from "@mui/material";
import { useState } from "react";
import loadingLogo from './Card_payment/assets/Group 4615.svg';


const ButtonSign = styled(Button)(() => ({
  color: "#313440",
  padding: "10px",
  width: "101px",
  fontWeight: "500",
  borderRadius: "9px",
  backgroundColor: "#FFFFFF",
  textTransform: "unset",
  textDecoration: "none",
  boxShadow: "none",
  marginRight: "100px",
  float: "right",
  zIndex: "1",
  marginTop: "38px",
  fontFamily: "Poppins",
  "&:hover": {
    backgroundColor: "#FF5353",
    color: "#FFFFFF",
    boxShadow: "none"
  }
}));

export default function ButtonSignOut() {
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


  const history = useHistory()

  const [loading, setLoading] = useState(false);

    
  const handleSignOut = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      localStorage.clear();
      history.push("/")
      window.location.reload();
    },3000)
};

  return (
    <>
    <ButtonSign variant="contained" onClick={() => handleSignOut()}>
      Sign Out
    </ButtonSign>

    {/* Modal loading */}
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
             Thank You for cravyng with us!
            </Typography>
          </Typography>
        
      </Box>
      </Modal>
    </>
  );
}
