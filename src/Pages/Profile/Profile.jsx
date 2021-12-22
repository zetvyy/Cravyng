import "./Profile.css";
import image from "./assets/Rectangle 5.png";
import ratingStar from "./assets/Vector (2).png";
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
import DatePeriod from "../../Components/Date/DatePeriod";
import { getSalesSummary } from "../../redux/action/profileAction";

const Profile = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.authReducer.data);
  const rating = useSelector(state => state.profile.rating)

  useEffect(() => {
    dispatch(getDetailUser());
    dispatch(getSalesSummary());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Checkout />
      {/* // header profile */}
      <div className="container">
        <img className="image" src={users.image || image} alt="" />

        <div className="profile-wrap">
          <ButtonSignOut />

          <div className="title">
            <h1>{users.name}</h1>
            <div className="info-profile">
              <p>{users.email}</p>
              <p style={{ margin: "0 24px" }}>|</p>
              <div className="rating-wrap">
                <img src={ratingStar} alt="" />
                <p>{rating[0] ? Math.round(rating[0]["Average Rating"]) : 0 }</p>
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
       
        <DatePeriod label="From"/>
      
        <DatePeriod label="To"/>
      
        <SalesSummary />

        <TableOrder />
      </Container>
    </>
  );
};
export default Profile;
