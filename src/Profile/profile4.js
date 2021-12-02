import React, { useState } from "react";
import Styles from "./css/profile4.module.scss";
import foto from "./assets/logo.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingBasket } from "react-icons/md";
import { MdStars } from "react-icons/md";

function Profile4() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className={Styles.container}>
        <nav className={Styles.nav}>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            <a href="#">Continue as merchant</a>
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

        <div className={Styles.banner}>
          {/* <img src={foto2} alt="banner-cravyng" /> */}
          <div className={Styles.captionBanner}>
            <h2>Heavenly Taste</h2>
            <h4>
              hi@heavenly.taste | <MdStars /> 4.7{" "}
            </h4>
          </div>
          <div className={Styles.button}>
            <button className={Styles.button1}>
              <a href=""> Change Header Photo</a>
            </button>
            <button className={Styles.button2}>
              <a href=""> Sign out</a>
            </button>
          </div>
        </div>
        <div className={Styles.sales}>
          <h4>Sales Summary</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile4;
