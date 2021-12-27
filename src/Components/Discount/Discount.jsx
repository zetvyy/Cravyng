import * as React from 'react';
import { CardActionArea, Typography, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getDiscount } from '../../redux/action/discountAction';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Discount = () => {
    const [open, setOpen] = React.useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const {dataDiscount} =  useSelector(state => state.discountReducer)
    const dispatch = useDispatch();
    const handleCopy = () => {
        dispatch(getDiscount(dataDiscount.code));
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      };

useEffect (() => {
    dispatch(getDiscount())
  }, [dispatch])

    return (
        <div>
        <Slider {...settings}>
        {dataDiscount?.map((item, index) => {
            return (
        <CopyToClipboard text={item.code} onCopy={handleCopy}>
        <Box sx={{paddingRight:'10px'}}>
        
        <Card  sx={{ maxWidth: 345, backgroundColor: '#616BC8', boxShadow: 'none',
                    "&:hover": {
                        backgroundColor: '#FF5353'
                        } 
                }} key={index}>
                <CardActionArea sx={{marginRight: '20px',}}>    
                    <CardContent>
                        <Typography sx={{color: 'white', fontFamily: 'Poppins', fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography sx={{color: 'white', fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
        
        </Box>
        </CopyToClipboard>
        )
        })}
        </Slider>
        
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert  onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                Copied 
            </Alert>
        </Snackbar>
        
        
        </div>
    )
}
export default Discount