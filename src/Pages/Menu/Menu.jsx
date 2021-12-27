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
import CheckoutCart from "../../Components/checkout-cart/checkout-cart";
import Header from "../../Components/Header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu, getMenuCategories } from "../../redux/action/menuAction";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";




const Menu = () => {
  // const [menuTitle, setMenuTitle] = useState();
  // const [price, setPrice] = useState();
  
  const dispatch = useDispatch();

  const { 
    dataRecommended, 
    dataMostFavorite, 
    dataAppetizer,
    dataHotDishes,
    dataSeafood,
    dataVegetable,
    dataStaple,
    dataFried,
    dataDesserts,
    dataSoup,
    dataBeverages,
    } = useSelector(
    (state) => state.menu
  );
  

  useEffect(() => {
    dispatch(getMenu());
    dispatch(getMenuCategories(1));
    dispatch(getMenuCategories(2));
    dispatch(getMenuCategories(3));
    dispatch(getMenuCategories(4));
    dispatch(getMenuCategories(5));
    dispatch(getMenuCategories(6));
    dispatch(getMenuCategories(7));
    dispatch(getMenuCategories(8));
    dispatch(getMenuCategories(9));
    dispatch(getMenuCategories(10));
    dispatch(getMenuCategories(11));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [valueTab, setValueTab] = useState(0);

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
    setValueTab(newValue);
  };

  return (
    <>
      <CheckoutCart />
      {/* Header Menu */}
      <Header />

      {/* Card Discount */}
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: "24px" }}>
        <Discount />
        {/* tabs menu */}

        <Box sx={{ maxWidth: "100%", bgcolor: "background.paper", marginTop: "40px", position: "sticky", top: 0, zIndex: "1" }}>
          <ThemeProvider theme={theme}>
            <Tabs value={valueTab} onChange={handleChange} variant="scrollable" scrollButtons="auto" textColor="secondary" aria-label="scrollable auto tabs example" font-family="Poppins">
              <CustomTab label="Recommended" href="#recommended" />
              <CustomTab label="Most Favorite" href="#most-favorite" />
              <CustomTab label="Appetizer" href="#appetizer" />
              <CustomTab label="Hot Dishes" href="#hot-dishes" />
              <CustomTab label="Seafood Dishes and Others" href="#seafood" />
              <CustomTab label="Vegetable Dishes" href="#vegetable" />
              <CustomTab label="Staple" href="#staple" />
              <CustomTab label="Fried Dishes" href="#fried" />
              <CustomTab label="Desserts" href="#desserts" />
              <CustomTab label="Soup" href="#soup" />
              <CustomTab label="Beverages" href="#beverages" />
            </Tabs>
          </ThemeProvider>
        </Box>
        {/* menu item */}

        <ScrollToTop showBelow={250} />

        <div id="recommended" className="categories">
          <img className="logo" src={logo1} alt="" />
          <h3>Recommended</h3>
        </div>
        
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataRecommended.map((item) => (

            <CardMenu
           
              menuName={item.food}
              menuImage={item.image}
              discountPrice={item.specialPrice}
              normalPrice={item.price}
              idMenu= {item.id}
              
              menuInfo={item.description}
              category={item.category.name}
               /> )
              
          )}
        </div>
        <div id="most-favorite" className="categories">
          <img className="logo" src={logo2} alt="" />
          <h3>Most Favorite</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataMostFavorite.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="appetizer" className="categories">
          <h3>Appetizer</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataAppetizer.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="hot-dishes" className="categories">
          <h3>Hot Dishes</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataHotDishes.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="seafood" className="categories">
          <h3>Seafood Dishes and Others</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataSeafood.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}

            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="vegetable" className="categories">
          <h3>Vegetable</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataVegetable.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="staple" className="categories">
          <h3>Staple</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataStaple.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="fried" className="categories">
          <h3>Fried Dishes</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataFried.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="desserts" className="categories">
          <h3>Desserts</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataDesserts.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="soup" className="categories">
          <h3>Soup</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataSoup.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        <div id="beverages" className="categories">
          <h3>Beverages</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataBeverages.map((item) => (
            <CardMenu 
            menuName={item.food} 
            menuImage={item.image} 
            discountPrice={item.specialPrice} 
            normalPrice={item.price} 
            idMenu={item.id}
            
            menuInfo={item.description} 
            category={item.category.name} />
          ))}
        </div>
        
        
      </Container>
    </>
  );
};
export default Menu;
