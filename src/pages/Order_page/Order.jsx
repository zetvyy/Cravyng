import {useState} from 'react';
import logo from "./assets/logo.png";
import Styles from "./assets/order.module.scss";
import { BsShopWindow, BsFillPersonFill } from "react-icons/bs";
import CardDetail from "../../components/Card_detail_payment/CardDetail";
import { Button } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import {MdStars} from 'react-icons/md';

const Order = () => {
  const [text, setText] = useState("How about our services?");

  const ratingChanged = newRating => {
    console.log(newRating);
  };

  const handleSubmit = () => {
    setText("Thank You!")
  }
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className={Styles.header}>
        <div>
          <h1>Heavenly Taste</h1>
          <p>
            <MdStars className={Styles.star_icon}/>
            <span>4.7</span>
          </p>
        </div>
      </div>
      <div className={Styles.container}>
        <div className={Styles.checkout}>
          <h3>My Order</h3>
          <p>Order #927467375</p>
          <div className={Styles.role}>
            <BsShopWindow className={Styles.icon} />
            <span>Heavenly Taste</span>
          </div>
          <div className={Styles.role}>
            <BsFillPersonFill className={Styles.icon} />
            <span>Rara Sekar</span>
          </div>
        </div>
        <CardDetail />
        <CardDetail />
        <Button className={Styles.btn_order}>Make new Order</Button>
        <div className={Styles.rating}>
          <div className={Styles.text}>
            <h3>
              {text}
            </h3>
            <p>Your rating helps us improve our ability to provide you with the best service possible.</p>
          </div>
          <div className={Styles.star_rating}>
            <ReactStars 
                count={5} 
                onChange={ratingChanged} 
                size={41} 
                activeColor="#ffd700"
                isHalf={true}
            />
            <Button 
              variant="outlined" 
              className={Styles.btn_submit}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
