import Styles from "./assets/carddetail.module.scss";

const CardDetail = () => {
  return (
    <>
      <div className={Styles.card}>
        <h3>1x</h3>
        <div className={Styles.card_content}>
          <h3>Menu A for 1 pax</h3>
          <p className={Styles.price}>
            Rp. 176.000 <span> Rp. 220.000</span>
          </p>
          <p>+ Scrambled egg with Tomato</p>
          <p>+ Chicken in Sichuan Chili Oil Sauce</p>
          <p className={Styles.note}>Note: no mayo</p>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
