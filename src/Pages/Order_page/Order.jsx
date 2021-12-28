import { useState, useEffect } from "react";
import Styles from "./assets/order.module.scss";
import { BsShopWindow, BsFillPersonFill } from "react-icons/bs";
// import CardDetail from "../../Components/Card_detail_payment/CardDetail";
import { Button } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import { MdStars } from "react-icons/md";
import CheckoutCart from "../../Components/checkout-cart/checkout-cart";
import { useHistory } from "react-router-dom";
import ButtonSignOut from "../../Components/ButtonSignOut";
import { useSelector, useDispatch } from "react-redux";
import { getDetailUser } from "../../redux/action/authAction";
import { getOrderHistory } from "../../redux/action/profileAction";
import OrderHistory from "../../Components/OrderHistory/OrderHistory";

const Order = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const merchant = useSelector((state) => state.authReducer.data);
  const users = useSelector((state) => state.profile.data);
  const { data } = useSelector((state) => state.profile);
  // const { addCart } = useSelector((state) => state.addCartMenu);

  const [text, setText] = useState("How about our services?");

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleSubmit = () => {
    setText("Thank You!");
  };

  useEffect(() => {
    dispatch(getDetailUser());
    dispatch(getOrderHistory());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <CheckoutCart />
      <div className={Styles.header}>
        <div className={Styles.info_profile}>
          <h1>{users[0] ? users[0].menu.user.name : ""}</h1>
          <div className={Styles.rating}>
            <MdStars className={Styles.star_icon} />
            <span>4.7</span>
          </div>
        </div>
      </div>
      <div className={Styles.btn_signout}>
        <ButtonSignOut />
      </div>
      <div className={Styles.container}>
        {data?.map((item) => (
          <div className={Styles.checkout}>
            <h3>My Order</h3>
            <p>Order {item.order.id}</p>
            <div className={Styles.role}>
              <BsShopWindow className={Styles.icon} />
              <span>{users[0] ? users[0].menu.user.name : ""}</span>
            </div>
            <div className={Styles.role}>
              <BsFillPersonFill className={Styles.icon} />
              <span>{merchant.name}</span>
            </div>
            {/* {users.map(user => ( */}
            <div>
              <OrderHistory quantity={item.quantity} menuFood={item.menu.food} menuSpecialPrice={item.menu.specialPrice} menuPrice={item.menu.price}  />
            </div>
            {/* ))} */}
            <Button className={Styles.btn_order} onClick={() => history.push("/menu")}>
              Make new Order
            </Button>
            <div className={Styles.rating}>
              <div className={Styles.text}>
                <h3>{text}</h3>
                <p>Your rating helps us improve our ability to provide you with the best service possible.</p>
              </div>
              <div div className={Styles.star_rating}>
                <ReactStars count={5} onChange={ratingChanged} size={41} activeColor="#ffd700" isHalf={true} />
                <Button variant="outlined" className={Styles.btn_submit} onClick={handleSubmit} type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Order;
