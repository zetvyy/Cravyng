import React from "react";
import Styles from "../checkout-cart-3/css/cart.module.scss";
import foto from "../checkout-cart-3/assets/logo.png";
import foto2 from "../checkout-cart-3/assets/wavy.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { createNewOrder } from "../../redux/action/orderAction";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/action/addCartAction";
import { useEffect } from "react";

function Checkoutcart3() {
  const dispatch = useDispatch();

  const handleNewOrder = () => {
    dispatch(createNewOrder());
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(createNewOrder());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className={Styles.container}>
        <nav className={Styles.nav}>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            <span>Checkout</span>
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
            <Link to="/menu">
              <button onClick={handleNewOrder}> Input New Order </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutcart3;
