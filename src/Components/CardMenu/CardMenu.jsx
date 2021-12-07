import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, CardActionArea, Box, CssBaseline, Container, Dialog, DialogContent, TextField } from "@mui/material";
import menuImage from "./assets/Rectangle 4.png";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import discountImg from "./assets/Vector (2).png";
import detailImg from "./assets/image 23.png";
import likeImg from "./assets/Exclude.png";
import ButtonAddCart from "./ButtonCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Styles from "../../checkout-cart/css/checkout-module.scss";
// import React from "react";

export default function CardMenu({ menu, image, price }) {
  // const modal
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const handleOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => setOpen(false);

  //Radio Button
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //style font
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  //input
  const [newComment, setNewComment] = useState("");

  //increment, decrement
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(0);
  }

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
      {["Menu A for 1 Pax", "Menu B for 2 Pax", "Menu 3 for 1 Pax", "Menu B for 3 Pax", "Menu C for 3 Pax"].map((item, index) => {
        return (
          <Card sx={{ maxWidth: 200, boxShadow: "none", marginTop: "24px", paddingBottom: '20px' }} onClick={handleOpen("body")}>
            <CardActionArea>
              <CardMedia component="img" height="200" image={menuImage} alt="menu" />
              <CardContent sx={{ padding: 0, marginTop: 2, marginLeft: 1, marginBottom: 2, marginRight: 1 }}>
                <Typography variant="body2" sx={{ width: 272, fontWeight: "bold", fonSize: 16, color: "#000000", marginTop: 1, fontFamily: "Poppins" }}>
                  {item}
                </Typography>
                <Box sx={{ display: "flex", "& > :not(style)": { marginRight: "5px" } }}>
                  <Typography variant="caption" sx={{ fonSize: 12, color: "#313440", fontWeight: "bold", marginTop: 1, fontFamily: "Poppins" }}>
                    Rp 176.000
                  </Typography>
                  <Typography variant="caption" sx={{ textDecoration: "line-through", fonSize: 12, color: "#868993", marginTop: 1, fontFamily: "Poppins" }}>
                    Rp 196.000
                  </Typography>
                  <img src={discountImg} alt="" style={{ width: "10px", height: "10px", marginTop: "13px" }} />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}

      {/* modal/dialog detail menu */}
      <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogContent maxWidth sx={{ padding: "0", width: "500px" }}>
          <img src={detailImg} alt="" style={{ objectFit: "cover" }} />
          <CssBaseline />
          <Container maxWidth="xl" dividers={scroll === "paper"} sx={{ marginTop: "24px", borderBottom: "10px solid #FAF9FF" }}>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "Bold", fontSize: "21px" }}>Menu A for 1 Pax</Typography>
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
              <Typography sx={{ color: "#313440", fontWeight: "bold" }}>Discount Price</Typography>
              <Typography sx={{ textDecoration: "line-through", fonSize: 12, color: "#868993" }}>Normal Price</Typography>
              <img src={discountImg} alt="" style={{ width: "10px", height: "10px", marginTop: "6px" }} />
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
              <img src={likeImg} alt="" style={{ width: "20px", height: "20px" }} />
              <Typography sx={{ color: "#FF5353" }}>Recommended</Typography>
            </Box>
            <Typography sx={{ marginTop: "17px", fontSize: "14px", paddingBottom: "24px" }}>
              Scramble egg with tomato / Stir-fried String Beans ( Choose 1 ) + Chicken In Sichuan Chili Oil Sauce / Sliced Beef and Ox tongue in Chill Sauce ( Choose 1 ) + Rice + Homemade Honey Black Tea
            </Typography>
          </Container>

          <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{ marginTop: "24px", paddingBottom: "25.5px", borderBottom: "1px solid #D3D9FF" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>Choice of Veg</Typography>
                <Typography sx={{ color: "#616BC8", fontSize: "14px" }}>*Required</Typography>
              </Box>
              <Typography sx={{ marginTop: "4px", color: "#868993" }}>Select 1</Typography>
              <FormControl component="fieldset" sx={{ marginTop: "17.5px" }}>
                <RadioGroup aria-label="foodChoice1" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
                  <FormControlLabel value="food1" control={<Radio />} label="Scrambled Egg with Tomato" />
                  <FormControlLabel value="food2" control={<Radio />} label="Stir-fried String Beans" />
                </RadioGroup>
              </FormControl>
            </Container>

            <Container maxWidth="xl" sx={{ marginTop: "24px", paddingBottom: "25.5px", borderBottom: "10px solid #FAF9FF" }}>
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
            </Container>
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
              <ButtonAddCart number={counter} />
            </Box>
          </ThemeProvider>
        </DialogContent>
      </Dialog>
    </Box>
    // </div>
    // </div>
  );
}
