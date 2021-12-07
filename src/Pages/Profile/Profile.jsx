import "./Profile.css";
import image from "./assets/Rectangle 5.png";
import rating from "./assets/Vector (2).png";
import ButtonSignOut from "../../components/ButtonSignOut";
import ButtonUpload from "../../components/ButtonUpload";
import { Container, CssBaseline, Typography } from "@mui/material";
import DateFilter from "../../components/Date/DateFilter";
import SalesSummary from "../../components/SalesSummary/SalesSummary";
import TableOrder from "../../components/TableProfile/TableProfile";
import Checkout from "../../components/checkout-cart/checkout-cart";

const Profile = () => {
  return (
    <>
      <Checkout />
      {/* // header profile */}
      <div className="container">
        <img className="image" src={image} alt="" />

        <div className="profile-wrap">
          <ButtonSignOut />

          <div className="title">
            <h1>Heavenly Taste</h1>
            <div className="info-profile">
              <p>hi@heavenly.taste</p>
              <p style={{ margin: "0 24px" }}>|</p>
              <div className="rating-wrap">
                <img src={rating} alt="" />
                <p>4.7</p>
              </div>
            </div>
            <ButtonUpload />
          </div>
        </div>
      </div>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: "61px" }}>
        <Typography sx={{ fontFamily: "Poppins", fontWeight: "700", fontSize: "24px" }}>Sales Summary</Typography>

        <DateFilter />

        <SalesSummary />

        <TableOrder />
      </Container>
    </>
  );
};
export default Profile;
