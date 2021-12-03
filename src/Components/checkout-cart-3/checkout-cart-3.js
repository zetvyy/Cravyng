import React from "react";
import Styles from "../checkout-cart-3/css/cart.module.scss";
import foto from "../checkout-cart-3/assets/logo.png";
import foto2 from "../checkout-cart-3/assets/wavy.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Checkoutcart3() {
  return (
    <div>
      <div className={Styles.container}>
        <nav className={Styles.nav}>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            <a href="#">Checkout</a>
          </div>
        </nav>
        <div className={Styles.Hero}>
          <img src={foto2} alt="Order Placed!" />
          <div className={Styles.Caption}>
            <h3>
              <IoMdCheckmarkCircle /> Order Placed!
            </h3>
            <h4> Preparing the order right away</h4>
          </div>
          <div className={Styles.completeOrder}>
            <div className={Styles.orderId}>
              <p>Order ID</p>
              <p>Total Payment</p>
            </div>
            <div className={Styles.idOrder}>
              <p>#927467375</p>
              <p>Rp 352.000</p>
            </div>
          </div>
          <div className={Styles.button}>
            <button> Input New Order </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutcart3;
