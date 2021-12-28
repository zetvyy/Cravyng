import Styles from "./assets/OrderHistory.module.scss";

const OrderHistory = ({ quantity, menuFood, menuSpecialPrice, menuPrice, variantOptions }) => {
  return (
    <>
      <div className={Styles.card}>
        <h3>{quantity}x</h3>
        <div className={Styles.card_content}>
          <h3>{menuFood}</h3>
          {menuSpecialPrice !== null ? (
            <p className={Styles.price}>
              Rp {menuSpecialPrice} <span> Rp {menuPrice}</span>
            </p>
          ) : (
            <p> Rp {menuPrice} </p>
          )}
          <p>+ {variantOptions}</p>
          {/* <p>+ Chicken in Sichuan Chili Oil Sauce</p> */}
          <p className={Styles.note}></p>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
