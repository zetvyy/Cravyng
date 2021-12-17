import React, { useState } from "react";
import Styles from "./css/Signup.module.scss";
import foto from "./assets/logo.png";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link, useLocation, useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../../redux/action/authAction";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Modal, Box, Typography} from "@mui/material";
import loadingLogo from './assets/loadingLogo.svg';

function SignUpForm() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    fontFamily: 'Poppins',
    textAlign: 'center',
  };

  const location = useLocation()
	const role = location.pathname.split('/')[2]

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const dispatch = useDispatch();
  const history = useHistory()

  const handleChangeInput = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const submitRegister = e => {
    const {name, email, password, confirmPassword} = register
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (role) {
        if (name && email && password && confirmPassword) {
          setLoading(false);
          dispatch(registerSuccess({ ...register, role}));
          history.push(`/sign-in/${role}`)
        } else {
          alert("register failed")
          setLoading(false);
        }
      } 
    }, 3000)
	};
	
	const handleClick = () => {
		
	}

  return (
    <div>
      <nav>
        <img src={foto} alt="logo" />
        <p>Continue as {role}</p>
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
                placeholder={role === "merchant" ? "Restaurant Name" : "Customer Name"}
                value={register.name} 
                onChange={e => handleChangeInput(e)} />
						<input 
								name="email" 
								type="text" 
								placeholder="Email" 
								value={register.email} 
								onChange={e => handleChangeInput(e)} />
            <div className={Styles.password_input}>
							<input 
								name="password" 
								type={showPassword ? "text" : "password"} 
								placeholder="Password 5+ Characters" value={register.password} 
								onChange={e => handleChangeInput(e)} />
              {showPassword ? 
								<BsFillEyeFill className={Styles.eye_icon} 
								onClick={() => setShowPassword(!showPassword)} /> 
								: 
								<BsFillEyeSlashFill className={Styles.eye_icon} 
								onClick={() => setShowPassword(!showPassword)} />
							}
            </div>
            <div className={Styles.password_input}>
							<input 
								name="confirmPassword" 
								type={showConfirmPassword ? "text" : "password"} 
								placeholder="Confirm Password 5+ Characters" 
								value={register.confirmPassword} 
								onChange={e => handleChangeInput(e)} />
              {showConfirmPassword ? (
								<BsFillEyeFill className={Styles.eye_icon} 
								onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              ) : (
								<BsFillEyeSlashFill className={Styles.eye_icon} 
								onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              )}
            </div>

            <div className={Styles.chkbox}>
              <input className={Styles.box} type="checkbox" name="remember" onClick={() => handleClick()}/>
              <p> I agree with Cravyng terms & conditions </p>
            </div>
            <div className={Styles.formup}>
              <button className={Styles.btnsignup} onClick={e => submitRegister(e)} payload={register}>
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
                <Link to={`/sign-in/${role}`}>
                  <span> Sign in</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

       {/* Modal Loading */}
       <Modal
        open={loading}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography            
          >
            <img src={loadingLogo} alt="" />
            <Typography>
             Hold on, don't close your browser ...
            </Typography>
          </Typography>
        
        </Box>
      </Modal>
    </div>
  );
}

export default SignUpForm;
