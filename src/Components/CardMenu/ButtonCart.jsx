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



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

export default function ButtonAddCart({number}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };
    
    return (      
      <>
      <ButtonCart onClick={handleClick} variant="contained" >Add to Cart</ButtonCart>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert  onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {number} item added to cart
          </Alert>
      </Snackbar>
      </>        
    );
  }