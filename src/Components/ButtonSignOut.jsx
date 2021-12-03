import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

  
const ButtonSign = styled(Button) (() => ({
    color: '#313440',
    padding: '10px',
    width: '101px',
    fontWeight: '500',
    borderRadius: '9px',
    backgroundColor: '#FFFFFF',
    textTransform: 'unset',
    textDecoration: 'none',
    boxShadow: 'none',
    marginRight: '100px',
    float: 'right',
    zIndex: '1',
    marginTop: '38px',
    fontFamily: 'Poppins',
    '&:hover': {
      backgroundColor: '#FF5353',
      color: '#FFFFFF',
      boxShadow: 'none'
    },
  }));
  
  export default function ButtonSignOut() {
    
    return (      
        <ButtonSign variant="contained" >Sign Out</ButtonSign>        
    );
  }