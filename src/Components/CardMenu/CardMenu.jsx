import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, CardActionArea, Box, CssBaseline, Container, Dialog, DialogContent, TextField } from "@mui/material";
// import menuImage from "./assets/Rectangle 4.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import discountImg from "./assets/Vector (2).png";
// import detailImg from "./assets/image 23.png";
import likeImg from "./assets/Exclude.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import { getMenuDetail } from "../../redux/action/menuDetailAction";
import { addToCart } from "../../redux/action/addCartAction";
// import Styles from "../../checkout-cart/css/checkout-module.scss";
// import React from "react";

const CardMenu = ({ menuName, menuImage, discountPrice, normalPrice, idMenu, menuInfo, category }) => {
  // const modal
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  //Radio Button
  const [variantsOptionId, setVariantsOptionId] = useState("");

  //input
  const [newComment, setNewComment] = useState("");

  //increment & decrement
  const [counter, setCounter] = useState(0);

  //snackbar
  const [openAlert, setOpenAlert] = useState(false);

  const dispatch = useDispatch();

  const { dataDetailMenu } = useSelector((state) => state.menuDetail);

  console.log(dataDetailMenu.variants ? dataDetailMenu.variants[0].id : "");

  const order = useSelector((state) => state.authReducer.Order);

  const handleOpen = (scrollType) => () => {
    dispatch(getMenuDetail(idMenu));
    setOpen(true);
    setScroll(scrollType);
  };

  // useEffect (() => {
  //   dispatch(getMenuDetail(id))
  // }, [dispatch])

  const handleClose = () => setOpen(false);
  //Radio Button
  const [variantsOptionId, setvariantsOptionId] = useState("");

  //Radio Button

  const handleChange = (event) => {
    setVariantsOptionId(event.target.value);
  };

  //style font
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  //increment, decrement

  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(0);
  }

  // alert snackbar
  const [openAlert, setOpenAlert] = useState(false);
  const order = useSelector((state) => state.authReducer.Order);
  const handleClickAlert = () => {
    const dataCart = {
      menuId: idMenu,
      orderId: ~~order,
      quantity: counter,
      variantId: dataDetailMenu.variants[0].id,
      variantOptionId: ~~variantsOptionId,
    };
    dispatch(addToCart(dataCart));
    console.log(dataCart);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    // <div>
    //   <div className={Styles.Container}>
    //     <nav>
    //       <div className={Styles.Logo}>
    //         <img src={foto} alt="Cravyng Logo" />
    //         <a href="#">Continue as merchant</a>
    //       </div>
    //       <div className={Styles.Cart}>
    //         <RiAccountCircleFill /> Heavenly Taste |
    //       </div>
    //       <div className={Styles.Cart2}>
    //         <MdShoppingBasket /> 0 Items
    //       </div>
    //     </nav>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",

        "& > :not(style)": {
          marginRight: "13px",
        },
      }}
    >
      <Card sx={{ maxWidth: 200, boxShadow: "none", marginTop: "24px", paddingBottom: "20px" }} onClick={handleOpen("body")}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={menuImage} alt="menu" />
          <CardContent sx={{ padding: 0, marginTop: 2, marginLeft: 1, marginBottom: 2, marginRight: 1 }}>
            <Typography variant="body2" sx={{ width: 272, fontWeight: "bold", fonSize: 16, color: "#000000", marginTop: 1, fontFamily: "Poppins" }}>
              {menuName}
            </Typography>
            <Box sx={{ display: "flex", "& > :not(style)": { marginRight: "5px" } }}>
              <Typography variant="caption" sx={{ fonSize: 12, color: "#313440", fontWeight: "bold", marginTop: 1, fontFamily: "Poppins" }}>
                {discountPrice}
              </Typography>
              {discountPrice !== null ? (
                <Typography variant="caption" sx={{ textDecoration: "line-through", fonSize: 12, color: "#868993", marginTop: 1, fontFamily: "Poppins" }}>
                  {normalPrice}
                </Typography>
              ) : (
                <Typography variant="caption" sx={{ fonSize: 12, color: "#313440", fontWeight: "bold", marginTop: 1, fontFamily: "Poppins" }}>
                  {normalPrice}
                </Typography>
              )}
              {discountPrice !== null ? (
                <img src={discountImg} alt="" style={{ width: "10px", height: "10px", marginTop: "13px" }} />
              ) : (
                <img src={discountImg} alt="" style={{ width: "10px", height: "10px", marginTop: "13px", display: "none" }} />
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* modal/dialog detail menu */}

      <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogContent maxWidth sx={{ padding: "0", width: "500px" }}>
          <img src={menuImage} alt="" style={{ objectFit: "cover", width: "500px", height: "275px" }} />
          <CssBaseline />
          <Container maxWidth="xl" dividers={scroll === "paper"} sx={{ marginTop: "24px", borderBottom: "10px solid #FAF9FF" }}>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "Bold", fontSize: "21px" }}>{menuName}</Typography>
            <Box
              sx={{
                display: "flex",
                marginTop: "8px",
                "& > :not(style)": {
                  marginRight: "10px",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                },
              }}
            >
              <Typography sx={{ color: "#313440", fontWeight: "bold" }}>{discountPrice}</Typography>

              {discountPrice !== null ? (
                <Typography variant="caption" sx={{ textDecoration: "line-through", fonSize: 12, color: "#868993", fontFamily: "Poppins" }}>
                  {normalPrice}
                </Typography>
              ) : (
                <Typography variant="caption" sx={{ fonSize: 12, color: "#313440", fontWeight: "bold", fontFamily: "Poppins" }}>
                  {normalPrice}
                </Typography>
              )}
              {discountPrice !== null ? (
                <img src={discountImg} alt="" style={{ width: "10px", height: "10px", marginTop: "6px" }} />
              ) : (
                <img src={discountImg} alt="" style={{ width: "10px", height: "10px", marginTop: "6px", display: "none" }} />
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "8px",
                "& > :not(style)": {
                  marginRight: "13px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                },
              }}
            >
              {category === "Recommended" ? <img src={likeImg} alt="" style={{ width: "20px", height: "20px" }} /> : <img src={likeImg} alt="" style={{ width: "20px", height: "20px", display: "none" }} />}

              <Typography sx={{ color: "#FF5353" }}>{category}</Typography>
            </Box>
            <Typography sx={{ marginTop: "17px", fontSize: "14px", paddingBottom: "24px" }}>{menuInfo}</Typography>
          </Container>

          <ThemeProvider theme={theme}>
            {dataDetailMenu.variants &&
              dataDetailMenu.variants.length > 0 &&
              dataDetailMenu.variants.map((item) => (
                <Container maxWidth="xl" sx={{ marginTop: "24px", paddingBottom: "25.5px", borderBottom: "1px solid #D3D9FF" }} key={item.id}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>{item.label}</Typography>
                    <Typography sx={{ color: "#616BC8", fontSize: "14px" }}>*Required</Typography>
                  </Box>
                  <Typography sx={{ marginTop: "4px", color: "#868993" }}>Select 1</Typography>
                  <FormControl component="fieldset" sx={{ marginTop: "17.5px" }}>
                    <RadioGroup aria-label="foodChoice1" name="controlled-radio-buttons-group" value={variantsOptionId} onChange={handleChange}>
                      {item.variantOptions.length > 0 && item.variantOptions.map((option) => <FormControlLabel value={option.id} control={<Radio />} label={option.label} />)}
                      {/* <FormControlLabel value="food2" control={<Radio />} label="Stir-fried String Beans" /> */}
                    </RadioGroup>
                  </FormControl>
                </Container>
              ))}
            {/* <Container maxWidth="xl" sx={{ marginTop: "24px", paddingBottom: "25.5px", borderBottom: "10px solid #FAF9FF" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>Choice of Meat</Typography>
                <Typography sx={{ color: "#616BC8", fontSize: "14px" }}>*Optional</Typography>
              </Box>
              <Typography sx={{ marginTop: "4px", color: "#868993" }}>Select 1</Typography>
              <FormControl component="fieldset" sx={{ marginTop: "17.5px" }}>
                <RadioGroup aria-label="foodChoice2" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
                  <FormControlLabel value="food3" control={<Radio />} label="Chicken in Sichuan Chili Oil Sauce" />
                  <FormControlLabel value="food4" control={<Radio />} label="Sliced Beed and Ox Tongue in Chili Sauce" />
                </RadioGroup>
              </FormControl>
            </Container> */}
            <Container maxWidth="xl" sx={{ marginTop: "24px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Special Instructions</Typography>
              <Typography sx={{ color: "#868993", marginTop: "4px" }}>Any specific preferences? Let us know.</Typography>
              <TextField
                multiline
                placeholder="e.g. no mayo"
                rows={4}
                value={newComment}
                onChange={(event) => {
                  setNewComment(event.target.value);
                }}
                sx={{
                  width: "447px",
                  marginTop: "18px",
                }}
              />
            </Container>
            <Box sx={{ marginTop: "26px", padding: "24px", display: "flex" }}>
              <Typography sx={{ marginRight: "18px", padding: "5px", cursor: "pointer", fontSize: "20px" }} onClick={decrementCounter}>
                -
              </Typography>
              <Typography sx={{ marginRight: "18px", padding: "10px", fontWeight: "bold" }}> {counter} </Typography>
              <Typography sx={{ padding: "5px", cursor: "pointer", fontSize: "20px" }} onClick={incrementCounter}>
                +
              </Typography>
              <Button
                sx={{
                  color: "#FFFFFF",
                  padding: "10px",
                  width: "333px",
                  fontWeight: "bold",
                  borderRadius: "9px",
                  backgroundColor: "#FF5353",
                  textTransform: "unset",
                  textDecoration: "none",
                  boxShadow: "none",
                  marginLeft: "23px",
                  "&:hover": {
                    backgroundColor: "#ff5e5e",
                    boxShadow: "none",
                  },
                }}
                onClick={handleClickAlert}
                variant="contained"
              >
                Add to Cart
              </Button>

              <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: "100%" }}>
                  {counter} item added to cart
                </Alert>
              </Snackbar>
            </Box>
          </ThemeProvider>
        </DialogContent>
      </Dialog>
    </Box>
    // </div>
    // </div>
  );
};
export default CardMenu;
