import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, CardActionArea, Box } from '@mui/material';
import menuImage from './assets/Rectangle 4.png'
import discountImg from './assets/Vector (2).png'

export default function CardMenu ({menu, image, price}) {



  return (
    <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            marginRight: '13px',
                        
             },
            }}
    >
       {['Menu A for 1 Pax', 'Menu B for 2 Pax', 'Menu 3 for 1 Pax', 'Menu B for 3 Pax', 'Menu C for 3 Pax' ].map((item, index) => {
            return (         
      <Card sx={{ maxWidth: 200, boxShadow: 'none', marginTop: '24px', }} key={index}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={menuImage} alt="menu" />
          <CardContent sx={{ padding: 0, marginTop: 2, marginLeft: 1, marginBottom: 2, marginRight: 1 }}>          
            <Typography variant="body2" sx={{ width: 272, fontWeight: 'bold', fonSize: 16, color: '#000000', marginTop: 1, fontFamily:'Poppins' }}>
            {item}
            </Typography>
            <Box sx={{display: 'flex', 
              '& > :not(style)': { marginRight: '5px'}, }} >
              <Typography variant="caption" sx={{ fonSize: 12, color: '#313440', fontWeight: 'bold', marginTop: 1, fontFamily:'Poppins' }}>
              Rp 176.000
              </Typography>
              <Typography variant="caption" sx={{ textDecoration:'line-through', fonSize: 12, color: '#868993', marginTop: 1, fontFamily:'Poppins' }}>
              Rp 196.000
              </Typography>
              <img src={discountImg} alt="" style={{width: '10px', height:'10px', marginTop:'13px'}} />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
            )
          })}
    </Box>
  );
}
