import Styles from "./assets/signin.module.scss";
import { Button } from "@mui/material";
import logo from "./assets/logo.png";
import { BsGoogle, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/action/authAction";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = e => {
    e.preventDefault();
    dispatch(loginSuccess(login));
  };

  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <p>Continue as merchant</p>
      </nav>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <h1>Sign in</h1>
          <input  
            type="email" 
            className={Styles.email_input} 
            placeholder="Email" 
            onChange={e => handleChangeInput(e)} 
            name="email"
          />
          <div className={Styles.password_input}>
            <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            onChange={e => handleChangeInput(e)} 
            name="password"
            />
            {showPassword ? <BsFillEyeFill className={Styles.eye_icon} onClick={() => setShowPassword(!showPassword)} /> : <BsFillEyeSlashFill className={Styles.eye_icon} onClick={() => setShowPassword(!showPassword)} />}
          </div>
          <Button className={Styles.btn_signin} onClick={e => submitLogin(e)} payload={login}>
            Sign in
          </Button>
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
            <Link to="/Signup" className={Styles.link_to}>
              {" "}
              Sign up as Customer{" "}
            </Link>
            or
            <Link to="/Signup" className={Styles.link_to}>
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
