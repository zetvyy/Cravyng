import React from "react";
import Styles from "./css/Signup.module.scss";
import foto from "./assets/logo.png";

function SignUpForm() {
  return (
    <div>
      <div className={Styles.Container}>
        <nav>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" />
            <a href="#">Continue as merchant</a>
          </div>
        </nav>
        <div className={Styles.SignUpForm}>
          <div className={Styles.title}>
            <h3>Sign Up</h3>
          </div>
          <div className={Styles.Form}></div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
