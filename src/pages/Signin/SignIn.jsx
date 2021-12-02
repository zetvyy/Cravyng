import Styles from "./assets/signin.module.scss";
import { Button } from "@mui/material";
import logo from "./assets/logo.png";
import { BsGoogle, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <nav>
        <img src={logo} alt="logo"/>
        <p>Continue as merchant</p>
      </nav>
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1>Sign in</h1>
        <input type="email" className={Styles.email_input} placeholder="Email" />
        <div className={Styles.password_input}>
          <input 
          type={showPassword ? "text" : "password"} 
          placeholder="Password" />
          {
          showPassword ? 
          <BsFillEyeFill 
          className={Styles.eye_icon} 
          onClick={() => setShowPassword(!showPassword)} /> 
          : 
          <BsFillEyeSlashFill 
          className={Styles.eye_icon} 
          onClick={() => setShowPassword(!showPassword)} />
          }
        </div>
        <Button className={Styles.btn_signin}>Sign in</Button>
        <div className={Styles.hr}>
          <hr style={{ width: "186px" }} />
          or
          <hr style={{ width: "186px" }} />
        </div>
        <Button variant="outlined" className={Styles.btn_google}>
          <BsGoogle className={Styles.icon_google} />
          Google
        </Button>
        <Button variant="outlined" className={Styles.btn_fb}>
          <FaFacebookF className={Styles.icon_fb} />
          Facebook
        </Button>
        <p>
          Don't have an account?
          <Link to="" className={Styles.link_to}>
            {" "}
            Sign up as Customer{" "}
          </Link>
          or
          <Link to="" className={Styles.link_to}>
            {" "}
            Sign up as Merchant{" "}
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignIn;
