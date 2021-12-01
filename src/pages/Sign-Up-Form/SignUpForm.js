import React from "react";
import Styles from "./css/Signup.module.scss";
import foto from "./assets/logo.png";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div>
      <nav>
        <div className={Styles.Logo}>
          <img src={foto} alt="Cravyng Logo" />
          <a href="#">Continue as merchant</a>
        </div>
      </nav>
      <div className={Styles.Container}>
        <div className={Styles.SignUpForm}>
          <form className={Styles.Form}>
            <div className={Styles.title}>
              <h3>Sign up</h3>
            </div>
            <input name="Restaurant Name" type="text" placeholder="Restaurant Name" />
            <input name="Email" type="text" placeholder="Email" />
            <input name="Password" type="password" placeholder="Password 5+ Characters" />
            <input name="Confirm Password" type="password" placeholder="Confirm Password 5+ characters" />
            <div className={Styles.chkbox}>
              <input className={Styles.box} type="checkbox" name="remember" />
              <p> I agree with Cravyng terms & conditions </p>
            </div>
            <div className={Styles.formup}>
              <button className={Styles.btnsignup}>Sign Up</button>
              <hr />
              <p className={Styles.or}>or</p>
              <div className={Styles.logo}>
                <button className={Styles.ggle}>
                  <IoLogoGoogle /> Google
                </button>
                <button className={Styles.fb}>
                  <FaFacebookF /> Facebook
                </button>
              </div>
              <p className={Styles.href}>
                Already have an account?
                <Link to="/Signin">
                  <a href="#"> Sign in</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
