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
import { useFormik } from "formik";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } 

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {
    errors.password = 'Must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'confirm password doesnt match'
  }

  return errors;
};

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
 
  const dispatch = useDispatch();
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate,
    onSubmit: (values, {setSubmitting}) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false)
    },
  })

  const submitRegister = e => {
    const {name, email, password, confirmPassword} = formik.values
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (role && name && email && password && confirmPassword) {
        setLoading(false);
        dispatch(registerSuccess({ name, email, password, confirmPassword, role}));
        history.push(`/sign-in/${role}`)
      } else {
        alert("register failed")
        setLoading(false)
      }
    }, 3000)
  };
  
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
                value={formik.values.name} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? 
              <div style={{color:"red", marginLeft:"10px"}}>{formik.errors.name}</div> : null
            }
						<input 
								name="email" 
								type="text" 
								placeholder="Email" 
								value={formik.values.email} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
            />
            {formik.touched.email && formik.errors.email ? 
              <div style={{color:"red", marginLeft:"10px"}}>{formik.errors.email}</div> : null
            }
            <div className={Styles.password_input}>
							<input 
								name="password" 
								type={showPassword ? "text" : "password"} 
								placeholder="Password 5+ Characters" value={formik.values.password} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
              />
              {formik.touched.password && formik.errors.password ? 
                <div style={{color:"red", marginLeft:"10px"}}>{formik.errors.password}</div> : null
              }
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
								value={formik.values.confirmPassword} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? 
                <div style={{color:"red", marginLeft:"10px"}}>{formik.errors.confirmPassword}</div> : null
              }
              {showConfirmPassword ? (
								<BsFillEyeFill className={Styles.eye_icon} 
								onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              ) : (
								<BsFillEyeSlashFill className={Styles.eye_icon} 
								onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              )}
            </div>

            <div className={Styles.chkbox}>
              <input className={Styles.box} type="checkbox" name="remember" />
              <p> I agree with Cravyng terms & conditions </p>
            </div>
            <div className={Styles.formup}>
              <button
                type='submit' 
                className={Styles.btnsignup} 
                onClick={e => submitRegister(e)}
                onSubmit={formik.handleSubmit}
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
