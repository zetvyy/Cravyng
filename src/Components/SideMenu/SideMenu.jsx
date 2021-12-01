import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';




const SideMenu = () => {
    const [value, setValue] = useState(0);

    const theme = createTheme({
      palette: {
        primary: {
          main: '#FF5353',
        },

        secondary: {
          main: '#313440'
        }
      },
    })

    const CustomTab = styled(Tab)`
      font-family: "Poppins";
      text-transform: unset;
      font-weight: 400;
      color: #C2C4CD; 
       :hover {
         color: #313440;
       } `

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
    <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper', marginTop: '40px'}}>
      <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="secondary"
        aria-label="scrollable auto tabs example"
        font-family="Poppins"
        
      >
          
          <CustomTab label="Recommended"  />
          <CustomTab label="Most Favorite" >
            <a href="#most-favorite">Most Favourite</a>
          </CustomTab>
          <CustomTab label="Item Three" />
          <CustomTab label="Item Four" />
          <CustomTab label="Item Five" />
          <CustomTab label="Item Six" />
          <CustomTab label="Item Seven" />
        
      </Tabs>
      </ThemeProvider>
    </Box>
    )
}
export default SideMenu