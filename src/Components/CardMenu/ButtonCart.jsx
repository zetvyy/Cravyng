import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

  
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
  
  export default function ButtonAddCart() {
    
    return (      
        <ButtonCart variant="contained" >Add to Cart</ButtonCart>        
    );
  }