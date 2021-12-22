import Styles from "./assets/carddetail.module.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrderHistory } from "../../redux/action/profileAction";

const CardDetail = ({user}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderHistory())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    {addCart?.map((item) => (
      <div className={Styles.card}>
        <h3>{user.quantity}x</h3>
        <div className={Styles.card_content}>
          <h3>{user.menu.food}</h3>
          <p className={Styles.price}>
            Rp. {user.menu.specialPrice} <span> {user.menu.price}</span>
          </p>
          <p>+ {user.variantId}</p>
          <p>+ {user.variantOptionId}</p>
          <p className={Styles.note}>Note: no mayo</p>
        </div>
        </div>
        ))}
        
      
    </>
  );
};

export default CardDetail;
