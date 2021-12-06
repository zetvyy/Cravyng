import Styles from "./assets/coupon.module.scss";
import { Button } from "@mui/material";

const Coupon = () => {
  return (
    <div className={Styles.coupon}>
      <h3>Coupon Code</h3>
      <p>Please input an coupon code here and get the discount!</p>
      <input type="text" placeholder="Enter your cupon code here" />
      <Button className={Styles.button}>Apply</Button>
    </div>
  );
};

export default Coupon;
