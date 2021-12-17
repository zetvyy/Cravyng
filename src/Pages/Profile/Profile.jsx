import "./Profile.css";
import image from "./assets/Rectangle 5.png";
import rating from "./assets/Vector (2).png";
import ButtonSignOut from "../../Components/ButtonSignOut";
import ButtonUpload from "../../Components/ButtonUpload";
import { Container, CssBaseline, Typography } from "@mui/material";
import DateFilter from "../../Components/Date/DateFilter";
import SalesSummary from "../../Components/SalesSummary/SalesSummary";
import TableOrder from "../../Components/TableProfile/TableProfile";
import Checkout from "../../Components/checkout-cart/checkout-cart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetailUser } from "../../redux/action/authAction";

const Profile = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.authReducer.data);

  useEffect(() => {
  	dispatch(getDetailUser());
  },[dispatch])

  return (
    <>
      <Checkout />
      {/* // header profile */}
      <div className="container">
        <img className="image" src={image} alt="" />

        <div className="profile-wrap">
          <ButtonSignOut />

          <div className="title">
            <h1>{users.name}</h1>
            <div className="info-profile">
              <p>{users.email}</p>
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
