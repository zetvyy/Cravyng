import Styles from "./assets/landingpage.module.scss";
import logo from "./assets/cravyng.png";
import { Button } from "@mui/material";
import { BsShopWindow, BsFillPersonFill } from "react-icons/bs";

const LandingPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <img src={logo} alt="logo" />
        <h3>Paradise on your plate</h3>
        <hr />
        <p>Continue to Cravyng as?</p>
        <Button className={Styles.btn_merchant}>
          <BsShopWindow className={Styles.icon} />
          Merchant
        </Button>
        <Button className={Styles.btn_customer}>
          <BsFillPersonFill className={Styles.icon} />
          Customer
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
