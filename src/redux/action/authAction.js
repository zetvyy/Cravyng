import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "../types";
import axios from "axios";

// const currentToken = localStorage.getItem("token");

// const myHeaders = new Headers();

// const formdata = new FormData();
// formdata.append("email", "agif@mail.com");
// formdata.append("password", "Agif123@");

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: formdata,
//   redirect: "follow",
//   token: currentToken
// };

export const registerSuccess = registerData => {
  console.log(registerData);
  return async dispatch => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL_API}/user/signup`, registerData);
      console.log(response);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data.result.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: REGISTER_FAIL,
        error: err
      });
    }
  };
};

export const loginSuccess = loginData => {
  return async dispatch => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL_API}/user/signin`, loginData);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.result.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
        error: err
      });
    }
  };
};
