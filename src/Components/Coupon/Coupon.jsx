import Styles from "./assets/coupon.module.scss";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Coupon = () => {
  const {dataDiscount} =  useSelector(state => state.discountReducer)

  return (
    <div className={Styles.coupon}>
      <h3>Coupon Code</h3>
      <p>Please input an coupon code here and get the discount!</p>
      <input type="text" placeholder="Enter your cupon code here" />
      {dataDiscount.code !== " " ? (
        <Button className={Styles.button}>Apply</Button>
      ): (
        <Button>Apply</Button>
      )}
      
    </div>
  );
};

export default Coupon;
