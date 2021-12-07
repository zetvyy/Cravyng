import "./Menu.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Discount from "../../Components/Discount/Discount";
import logo1 from "./assets/Vector (4).png";
import CardMenu from "../../Components/CardMenu/CardMenu";
import logo2 from "./assets/Vector (3).png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Checkout from "../../Components/checkout-cart/checkout-cart";
import Header from "../../Components/Header/Header";
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMenu } from './../redux/action/menuAction';

const Menu = () => {
  // const [menuTitle, setMenuTitle] = useState();
  // const [price, setPrice] = useState();
  // const dispatch = useDispatch();

  // const {isLoading: loadingMenu, data: menuData} = useSelector(
  //     (state) => state.menuReducer
  // );

  // useEffect(() => {
  //     dispatch(getMenu());
  // }, );

  const [value, setValue] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF5353",
      },

      secondary: {
        main: "#313440",
      },
    },
  });

  const CustomTab = styled(Tab)`
    font-family: "Poppins";
    text-transform: unset;
    font-weight: 400;
    color: #c2c4cd;
    :hover {
      color: #313440;
    }
  `;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <>
      <Checkout />
      {/* Header Menu */}
      <Header/>

      {/* Card Discount */}
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: "24px" }}>
        <Discount />

        {/* tabs menu */}

        <Box sx={{ maxWidth: "100%", bgcolor: "background.paper", marginTop: "40px" }}>
          <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" textColor="secondary" aria-label="scrollable auto tabs example" font-family="Poppins">
              <CustomTab label="Recommended" href="#recommended" />
              <CustomTab label="Most Favorite" href="#most-favorite" />
              <CustomTab label="Appetizer" href="#track-menu" />
              <CustomTab label="Seafood Dishes and Others" />
              <CustomTab label="Vegetable Dishes" />
              <CustomTab label="Staple" />
              {/* <CustomTab label="Item Seven" /> */}
            </Tabs>
          </ThemeProvider>
        </Box>

        {/* menu item */}

        <div id="recommended">
          <img className="logo" src={logo1} alt="" />
          <h3>Recommended</h3>
        </div>        
        <CardMenu />

        <div id="most-favorite">
          <img className="logo" src={logo2} alt="" />
          <h3>Most Favorite</h3>
        </div>
        <CardMenu />

        <div id="track-menu">
          {/* <img className="logo" src={logo2} alt="" /> */}
          <h3>Appetizer</h3>
        </div>
        <CardMenu/>
      </Container>
    </>
  );
};
export default Menu;
