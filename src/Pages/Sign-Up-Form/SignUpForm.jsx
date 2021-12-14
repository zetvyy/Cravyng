import React, { useState } from "react";
import Styles from "./css/Signup.module.scss";
import foto from "./assets/logo.png";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../../redux/action/authAction";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setRegister({...register, [e.target.name]: e.target.value})
  }

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(registerSuccess(register))
  }

  return (
    <div>
      <nav>
        <img src={foto} alt="logo" />
        <p>Continue as merchant</p>
      </nav>
      <div className={Styles.Container}>
        <div className={Styles.SignUpForm}>
          <form className={Styles.Form}>
            <div className={Styles.title}>
              <h3>Sign up</h3>
            </div>
            <input 
              name="name" 
              type="text" 
              placeholder="Restaurant Name"
              onChange={e => handleChangeInput(e)}
              />
            <input 
              name="email" 
              type="text" 
              placeholder="Email" 
              onChange={e => handleChangeInput(e)}            
              />
             <input 
              name="role" 
              type="text" 
              placeholder="Role" 
              onChange={e => handleChangeInput(e)}
            />
            <div className={Styles.password_input}>
              <input 
                name="password" 
                type={showPassword ? "text" : "password" }
                placeholder="Password 5+ Characters" 
                onChange={e => handleChangeInput(e)}            
              />
               {
              showPassword ? 
              <BsFillEyeFill className={Styles.eye_icon} 
              onClick={() => setShowPassword(!showPassword)} /> 
              : 
              <BsFillEyeSlashFill className={Styles.eye_icon} 
              onClick={() => setShowPassword(!showPassword)} />}
            </div>
            <div className={Styles.password_input}>
              <input 
                name="confirmPassword" 
                type={showConfirmPassword ? "text" : "password" }
                placeholder="Confirm Password 5+ Characters" 
                onChange={e => handleChangeInput(e)}            
              />
               {
              showConfirmPassword ? 
              <BsFillEyeFill className={Styles.eye_icon} 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> 
              : 
              <BsFillEyeSlashFill className={Styles.eye_icon} 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}
            </div>

            <div className={Styles.chkbox}>
              <input className={Styles.box} type="checkbox" name="remember" />
              <p> I agree with Cravyng terms & conditions </p>
            </div>
            <div className={Styles.formup}>
              <button 
                className={Styles.btnsignup}
                onClick={(e) => submitRegister(e)}
                payload={register}
              >
                Sign Up
              </button>
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
                <Link to="/sign-in">
                  <span href="#"> Sign in</span>
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
