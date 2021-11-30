import React from "react";
import Styles from "./css/checkout.module.scss";
import foto from "./assets/logo.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingBasket } from "react-icons/md";

function Checkoutcart() {
  return (
    <div>
      <div className={Styles.Container}>
        <nav>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            <a href="#">Continue as merchant</a>
          </div>
          <div className={Styles.Cart}>
            <RiAccountCircleFill /> Heavenly Taste |
          </div>
          <div className={Styles.Cart2}>
            <MdShoppingBasket /> 0 Items
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Checkoutcart;
