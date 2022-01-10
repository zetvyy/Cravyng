import Styles from "./assets/signin.module.scss";
import { Button, Modal, Box, Typography} from "@mui/material";
import logo from "./assets/logo.png";
import { BsGoogle, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link, useHistory, useLocation} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/action/authAction";
import loadingLogo from './assets/loadingLogo.svg'
import { useFormik } from "formik";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {
    errors.password = 'Must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
  }

  return errors;
};

const SignIn = () => {
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

	const history = useHistory();
	const location = useLocation()
	const rolee = location.pathname.split('/')[2]

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const dispatch = useDispatch();

  const redirectToMenu = () => {
    history.push("/menu")
  }

  const alertLogin = () => {
    alert("email or password invalid")
  }

  const submitLogin = async e => {
    const {email, password} = formik.values
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        dispatch(loginSuccess({email, password}, redirectToMenu, setLoading, alertLogin))
      } else {
          alert("field cannot be empty")
          setLoading(false);
      }
    },3000)
};

  return (
    <>
      {/* test */}
      <nav>
        <img src={logo} alt="logo" />
        <p>Continue as {rolee}</p>
      </nav>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <h1>Sign in</h1>
          <input 
            type="email" 
            className={Styles.email_input} 
            placeholder="Email" 
            onChange={formik.handleChange} 
            name="email" 
            value={formik.values.email}
          />
          {formik.errors.email ? 
            <div style={{color:"red", marginLeft:"10px"}}>{formik.errors.email}</div> : null
          }
          <div className={Styles.password_input}>
            <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                onChange={formik.handleChange} 
                name="password" 
                value={formik.values.password}                
            />
            {formik.errors.password ? 
              <div style={{color:"red", marginLeft:"10px"}}>{formik.errors.password}</div> : null
            }
            {showPassword ? 
                <BsFillEyeFill 
                className={Styles.eye_icon} 
                onClick={() => setShowPassword(!showPassword)} /> 
                : 
                <BsFillEyeSlashFill 
                className={Styles.eye_icon} 
                onClick={() => setShowPassword(!showPassword)} />
            }
          </div>
          <Button className={Styles.btn_signin} onClick={e => submitLogin(e)}>
            Sign in
          </Button>
          <div className={Styles.hr}>
            <hr style={{ width: "186px" }} />
            or
            <hr style={{ width: "186px" }} />
          </div>
          <Button variant="outlined" className={Styles.btn_google}>
            <BsGoogle className={Styles.icon_google} />
            <span>Google</span>
          </Button>
          <Button variant="outlined" className={Styles.btn_fb}>
            <FaFacebookF className={Styles.icon_fb} />
            <span>Facebook</span>
          </Button>
          <p>
            Don't have an account?
            <Link to={`/sign-up/customer`} className={Styles.link_to}>
              {" "}
              Sign up as Customer{" "}
            </Link>
            or
            <Link to={`/sign-up/merchant`} className={Styles.link_to}>
              {" "}
              Sign up as Merchant{" "}
            </Link>
          </p>
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
             Logging In ...
            </Typography>
          </Typography>
        
      </Box>
      </Modal>
    </>
  );
};

export default SignIn;
