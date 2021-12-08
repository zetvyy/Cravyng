import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';

  
const ButtonCart = styled(Button) (() => ({
    color: '#FFFFFF',
    padding: '10px',
    width: '333px',
    fontWeight: 'bold',
    borderRadius: '9px',
    backgroundColor: '#FF5353',
    textTransform: 'unset',
    textDecoration: 'none',
    boxShadow: 'none',
    marginLeft: '23px',
    '&:hover': {
      backgroundColor: '#ff5e5e',
      boxShadow: 'none'
    },
  }));




  

export default function ButtonAddCart({number}) {

  // alert snackbar
  const [openAlert, setOpenAlert] = useState(false);

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
        return;
      }

      setOpenAlert(false);
    };
    
  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
    
    return (      
      <>
      <Button 
        sx={{
          color: '#FFFFFF',
          padding: '10px',
          width: '333px',
          fontWeight: 'bold',
          borderRadius: '9px',
          backgroundColor: '#FF5353',
          textTransform: 'unset',
          textDecoration: 'none',
          boxShadow: 'none',
          marginLeft: '23px',
          '&:hover': {
            backgroundColor: '#ff5e5e',
            boxShadow: 'none'
          },
        }}
        onClick={handleClickAlert} variant="contained" >Add to Cart</Button>
      
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
          <Alert  onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            {number} item added to cart
          </Alert>
      </Snackbar>
      </>        
    );
  }