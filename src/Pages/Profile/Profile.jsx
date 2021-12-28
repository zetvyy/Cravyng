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
import { useEffect, useState } from "react";
import { getDetailUser } from "../../redux/action/authAction";
import DatePeriod from "../../Components/Date/DatePeriod";
import { getSalesSummary } from "../../redux/action/profileAction";
import moment from 'moment'
// import NotFound from '../../Components/NotFound'

const Profile = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.authReducer.data);
  const rating = useSelector(state => state.profile.rating);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [visible, setVisible] = useState(false)

  const submitPeriod = () => {
    const formattedStartDate = moment(startDate).format("YYYY/MM/DD HH:mm:ss")
    const formattedEndDate = moment(endDate).format("YYYY/MM/DD HH:mm:ss")
    dispatch(getSalesSummary(formattedStartDate, formattedEndDate));
  };

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
                <p>{rating[0] ? Math.round(rating[0]["Average Rating"]) : 0}</p>
              </div>
            </div>
            <ButtonUpload />
          </div>
        </div>
      </div>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: "61px" }}>
        <Typography sx={{ fontFamily: "Poppins", fontWeight: "700", fontSize: "24px" }}>Sales Summary</Typography>

        <DateFilter submitPeriod={submitPeriod} setVisible={setVisible} visible={visible} />

        {visible && (
        <>
          <DatePeriod label="From" onChange={setStartDate} value={startDate} />
          <DatePeriod label="To" onChange={setEndDate} value={endDate} />
        </>
        )}

        <SalesSummary />

        {/* <NotFound /> */}

        <TableOrder />
      </Container>
    </>
  );
};
export default Profile;
