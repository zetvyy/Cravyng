import Styles from "./assets/carddetail.module.scss";
import { addToCart } from "../../redux/action/addCartAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardDetail = () => {
  const dispatch = useDispatch();
  const { addCart } = useSelector((state) => state.addCartMenu);

  useEffect(() => {
    dispatch(addToCart());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {addCart?.map((item) => (
        <div className={Styles.card}>
          <h3>{item.quantity}x</h3>
          <div className={Styles.card_content}>
            <h3>{item.menu.food}</h3>
            {item?.menu.specialPrice !== null ? (
              <p className={Styles.price}>
                Rp {item.menu.specialPrice} <span> Rp {item.menu.price}</span>
              </p>
            ) : (
              <p> Rp {item.menu.price} </p>
            )}

            <p>+ {item.menu.variants[0].variantOptions[0].label}</p>
            {/* <p>+ Chicken in Sichuan Chili Oil Sauce</p> */}
            <p className={Styles.note}>Note: no mayo</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardDetail;
