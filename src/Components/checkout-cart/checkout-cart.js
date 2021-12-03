import React, { useState } from "react";
import Styles from "../checkout-cart/css/checkout.module.scss";
import foto from "../checkout-cart/assets/logo.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingBasket } from "react-icons/md";

function Checkoutcart() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className={Styles.Container}>
        <nav className={Styles.nav}>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            <span href="#">Continue as merchant</span>
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
      </div>
    </div>
  );
}

export default Checkoutcart;
