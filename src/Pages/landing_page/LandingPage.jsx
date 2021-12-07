import Styles from "./assets/landingpage.module.scss";
import logo from "./assets/cravyng.png";
import { Button } from "@mui/material";
import { BsShopWindow, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <img src={logo} alt="logo" />
        <h3>Paradise on your plate</h3>
        <hr />
        <p>Continue to Cravyng as?</p>
        <Link to="/sign-in" className={Styles.link}>
          <Button className={Styles.btn_merchant}>
            <BsShopWindow className={Styles.icon} />
            <span>Merchant</span>
          </Button>
        </Link>
        <Link to="/sign-up" className={Styles.link}>
          <Button className={Styles.btn_customer}>
            <BsFillPersonFill className={Styles.icon} />
            <span>Customer</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
