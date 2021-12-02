import { CardActionArea, Typography, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import Slider from "react-slick";



const Discount = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      };

    return (
        <div>
        <Slider {...settings}>
        
        {['Discount 20%', 'Discount 30%', 'Discount 40%', 'Discount 50%'].map((item, index) => {
            return (
        <Box sx={{paddingRight:'10px'}}>
        <Card sx={{ maxWidth: 345, backgroundColor: '#616BC8', boxShadow: 'none',
                        "&:hover": {
                            backgroundColor: '#FF5353'
                        } 
                        }} key={index}>
                        <CardActionArea sx={{marginRight: '20px',}}>    
                            <CardContent>
                            <Typography sx={{color: 'white', fontFamily: 'Poppins', fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
                                {item}
                            </Typography>
                            <Typography sx={{color: 'white', fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
                                20% off on minimum order value of Rp 300.000
                            </Typography>
                            </CardContent>
                        </CardActionArea>
        </Card>
        </Box>
        )
        
        })}
        
        </Slider>
        </div>
    )
}
export default Discount