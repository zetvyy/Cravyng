import React from "react";
import Styles from "../checkout-cart-3/css/cart.module.scss";
import foto from "../checkout-cart-3/assets/logo.png";
import foto2 from "../checkout-cart-3/assets/wavy.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/action/addCartAction";
import { createNewOrder, updateCheckout } from "../../redux/action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Checkoutcart3() {
  const dispatch = useDispatch();
  const { dataUpdateOrder } = useSelector((state) => state.getOrderMenu);
  // const { dataUpdateDiscount } = useSelector((state) => state.discountReducer)

  const handleNewOrder = () => {
    dispatch(createNewOrder());
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(createNewOrder());
    dispatch(updateCheckout());
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
              <p>#{dataUpdateOrder.id}</p>
              {dataUpdateOrder.priceTotalAftDiscount === null ? <p>Rp {dataUpdateOrder.priceTotal}</p> : <p>Rp {dataUpdateOrder.priceTotalAftDiscount}</p>}
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
