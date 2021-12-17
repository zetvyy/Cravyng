import Styles from "./assets/signin.module.scss";
import { Button, Modal, Box, Typography} from "@mui/material";
import logo from "./assets/logo.png";
import { BsGoogle, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link, useHistory, useLocation} from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { loginSuccess } from "../../redux/action/authAction";
import loadingLogo from './assets/loadingLogo.svg'

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

  const token = useSelector(state => state.authReducer.token);
  const role = useSelector(state => state.authReducer.role);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = async e => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (login.email && login.password) {
          dispatch(loginSuccess(login))
          if (token && role) {
            setLoading(false);
            setTimeout(() => {
              history.push("/menu")
              window.location.reload();
            },300)
          } else {
            alert("email or password invalid")
            setLoading(false);
          }
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
            placeholder="Email" o
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
