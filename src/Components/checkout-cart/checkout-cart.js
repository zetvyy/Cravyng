import React, { useState } from "react";
import Styles from "../checkout-cart/css/checkout.module.scss";
import foto from "../checkout-cart/assets/logo.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingBasket } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FaClipboardList } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { useHistory } from "react-router-dom"

function CheckoutCart() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  const history = useHistory();

  return (
    <div>
      <div className={Styles.Container}>
        <nav className={Styles.nav}>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            {/* <a href="#">Continue as merchant</a> */}
          </div>
          
          <div className={Styles.Cart} onClick={() => history.push('/profile')} >
            
              <RiAccountCircleFill  />
              Heavenly Taste |
            
          </div>
          
          <div className={Styles.Cart2} onClick={() => toggleMenu()}>
            <MdShoppingBasket /> 1 Items
          </div>
        </nav>
        {visible && (
          <div className={Styles.sideCart}>
            <h2>Your Cart</h2>
            <div className={Styles.tl2}>
              <h3>Start adding items to your cart</h3>
            </div>
            <div className={Styles.pax}>
              <p>Menu A for 1 Pax</p>
              <h4>
                <span>
                  <FaTrash />
                </span>
                1
                <span>
                  <FiPlus />
                </span>
              </h4>
            </div>
            <div className={Styles.addition}>
              <h4 className={Styles.paxSide}>
                Rp 176.000 <span> Rp 220.000 </span>
              </h4>
              <p className={Styles.add}>
                <FiPlus /> Scrambled Egg with Tomato
              </p>
              <p className={Styles.add}>
                <FiPlus /> Chicken in Sichuan Chili Oil Sauce
              </p>
              <p className={Styles.note}>
                <FaClipboardList /> Note
              </p>
            </div>
            <hr />
            <div className={Styles.pax2}>
              <p>Cucumber Salad</p>
              <h4>
                <span>
                  <AiOutlineMinus />
                </span>
                2
                <span>
                  <FiPlus />
                </span>
              </h4>
            </div>
            <div className={Styles.addition2}>
              <h4>
                Rp 88.000 <span> Rp 110.000 </span>
              </h4>
              <p className={Styles.note}>
                <FaClipboardList /> Note
              </p>
            </div>
            <hr />
            <div className={Styles.tl1}>
              <p>Price </p>
              <p>Rp 440.000</p>
            </div>
            <div className={Styles.tl1}>
              <p>Discount </p>
              <p>-Rp 88.000</p>
            </div>
            <hr />
            <div className={Styles.tl3}>
              <p>Total payment </p>
              <p>Rp 352.000</p>
            </div>
            <div className={Styles.buttonCheck} onClick={() => history.push('/checkout')} >
              <button> Go to Checkout </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutCart;
