import Styles from "./assets/coupon.module.scss";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateDiscount } from "../../redux/action/discountAction";
import { useState } from "react";

const Coupon = () => {
  const [voucher, setVoucher] = useState("")
  const { dataUpdateOrder } = useSelector((state) => state.getOrderMenu)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setVoucher(event.target.value)
  }
  
  
  
  const handleCoupon = () => {
    dispatch(updateDiscount(dataUpdateOrder.id, voucher))
  }

  return (
    <div className={Styles.coupon}>
      <h3>Coupon Code</h3>
      <p>Please input an coupon code here and get the discount!</p>
      <input value={voucher} onChange= {handleChange} type="text" placeholder="Enter your coupon code here"/>
      <Button className={Styles.button} onClick={handleCoupon}>Apply</Button>
    </div>
  );
};

export default Coupon;
