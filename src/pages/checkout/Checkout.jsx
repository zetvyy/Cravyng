import Styles from "./assets/checkout.module.scss";
import logo from "./assets/logo.png";
import { BsShopWindow, BsFillPersonFill } from "react-icons/bs";
import CardDetail from "../../components/Card_detail_payment/CardDetail";
import CardPayment from "../../components/Card_payment/CardPayment";

const Checkout = () => {
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
            <span>Heavenly Taste</span>
          </div>
          <div className={Styles.role}>
            <BsFillPersonFill className={Styles.icon} />
            <span>Rara Sekar</span>
          </div>
          <CardDetail />
          <CardDetail />
        </div>
        <div className={Styles.card_payment}>
          <CardPayment />
        </div>
      </div>
    </>
  );
};

export default Checkout;
