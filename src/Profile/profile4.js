import React, { useState } from "react";
import Styles from "./css/profile4.module.scss";
import foto from "./assets/logo.png";
import foto2 from "./assets/Vector4.png";
import foto3 from "./assets/wave.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingBasket } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { InputLabel, MenuItem, FormControl, Select, TextField, Stack,  } from "@mui/material";
import { MobileDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// const styles = (theme) => ({
//   classDatePicker: {
//     width: 140,
//     background: "red",
//   },
// });

function Profile4(props) {
  const [Date, setDate] = React.useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [value, setValue] = React.useState();

  const dateChange = (newValue) => {
    setValue(newValue);
  };

  // const DatePicker = styled(MobileDatePicker)(() => ({
  //   width: 140,
  // }));

  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className={Styles.container}>
        <nav className={Styles.nav}>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            <span >Continue as merchant</span>
          </div>
          <div className={Styles.Cart}>
            <RiAccountCircleFill /> Heavenly Taste |
          </div>
          <div className={Styles.Cart2} onClick={() => toggleMenu()}>
            <MdShoppingBasket /> 0 Items
          </div>
        </nav>
        {visible && (
          <div className={Styles.sideCart}>
            <h2>Your Cart</h2>
            <div className={Styles.tl2}>
              <h3>Start adding items to your cart</h3>
              <br />
              <h4>0 item(s)</h4>
            </div>
            <hr />
            <div className={Styles.tl1}>
              <p>Price </p>
              <p>Rp 0</p>
            </div>
            <div className={Styles.tl1}>
              <p>Discount </p>
              <p>-Rp 0</p>
            </div>
            <hr />
            <div className={Styles.tl1}>
              <p>Total payment </p>
              <p>Rp 0</p>
            </div>
          </div>
        )}

        <div className={Styles.banner}>
          {/* <img src={foto2} alt="banner-cravyng" /> */}
          <div className={Styles.captionBanner}>
            <h2>Heavenly Taste</h2>
            <h4>
              hi@heavenly.taste <span> | </span> <MdStars /> 4.7{" "}
            </h4>
          </div>
          <div className={Styles.button}>
            <button className={Styles.button1}>
              <span > Change Header Photo</span>
            </button>
            <button className={Styles.button2}>
              <span > Sign out</span>
            </button>
          </div>
        </div>
        <div className={Styles.sales}>
          <h4 className={Styles.h4}>Sales Summary</h4>
          <Stack direction="row" spacing={3} sx={{ marginTop: 5, marginLeft: 1.5 }}>
            <FormControl sx={{ minWidth: 160 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Date</InputLabel>
              <Select label="Date" labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={Date} onChange={handleChange} autoWidth >
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={21}>This Week</MenuItem>
                <MenuItem value={22}>Last Month</MenuItem>
                <MenuItem value={23}>Last 3 Months</MenuItem>
                <MenuItem value={24}>Period</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ minWidth: 100 }}>
              <MobileDatePicker label="From" inputFormat="MM/dd/yyyy" value={value} onChange={dateChange} renderInput={(params) => <TextField {...params} />} />
              <MobileDatePicker label="To" inputFormat="MM/dd/yyyy" value={value} onChange={dateChange} renderInput={(params) => <TextField {...params} />} />
            </LocalizationProvider>
          </Stack>
          <hr className={Styles.hr} />
          <div className={Styles.heroDetail}>
            <div className={Styles.detail}>
              <h3>TOTAL TRANSCATIONS</h3>
              <h4>0</h4>
            </div>
            <div className={Styles.detail}>
              <h3>PAID TRANSCATIONS</h3>
              <h4>Rp 0</h4>
            </div>
            <div className={Styles.detail}>
              <h3>UNPAID TRANSCATIONS</h3>
              <h4>Rp 0</h4>
            </div>
            <div className={Styles.detail}>
              <h3>GROSS SALES </h3>
              <h4>Rp 0</h4>
            </div>
            <div className={Styles.detail}>
              <h3>NET SALES</h3>
              <h4>Rp 0</h4>
            </div>
            <div className={Styles.detail}>
              <h3>AVERAGE SALES PER TRANSCATIONS</h3>
              <h4>Rp 0</h4>
            </div>
          </div>
          <hr className={Styles.hr} />
          <div className={Styles.history}>
            <p>Order Date</p>
            <p>#Order ID</p>
            <p>Total Order</p>
            <p>Status</p>
          </div>
          <img src={foto2} className={Styles.vctor} alt="vector" />
        </div>
        <div className={Styles.empty}>
          <img src={foto3} className={Styles.wave} alt="OOPS!" />
          <h4>Uh-oh!</h4>
          <p>No orders found. Try to change the timeframe,maybe?</p>
        </div>
      </div>
    </div>
  );
}

export default Profile4;
