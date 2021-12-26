import Styles from "./assets/checkout.module.scss";
import logo from "./assets/logo.png";
import { BsShopWindow, BsFillPersonFill } from "react-icons/bs";
import CardDetail from "../../Components/Card_detail_payment/CardDetail";
import CardPayment from "../../Components/Card_payment/CardPayment";
import Coupon from "../../Components/Coupon/Coupon";
import { useSelector, useDispatch } from "react-redux";
import { updateCheckout } from "../../redux/action/orderAction";
import { useEffect } from "react";
import { getDetailUser } from "../../redux/action/authAction";
import { getOrderHistory } from "../../redux/action/profileAction";


const Checkout = () => {
  const dispatch = useDispatch()
  const merchant = useSelector(state => state.profile.data);
  const users = useSelector(state => state.authReducer.data);
  const {dataUpdateOrder} = useSelector((state) => state.getOrderMenu)
  console.log(dataUpdateOrder)

  useEffect(() => {
    dispatch(updateCheckout());
    dispatch(getDetailUser());
    dispatch(getOrderHistory())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <p>Order Confirmation & Payment</p>
      </nav>
      <div className={Styles.container}>
        <div className={Styles.checkout}>
          <h1>Checkout</h1>
          <div className={Styles.role}>
            <BsShopWindow className={Styles.icon} />
            <span>{merchant[0] ? merchant[0].menu.user.name : ""}</span>
          </div>
          <div className={Styles.role}>
            <BsFillPersonFill className={Styles.icon} />
            <span>{users.name}</span>
          </div>
          <CardDetail />
          
          <Coupon />
        </div>
        <div className={Styles.card_payment}>
          <CardPayment />
        </div>
      </div>
    </>
  );
};

export default Checkout;
