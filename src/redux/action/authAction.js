import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, GET_DETAIL_USER, UPDATE_PROFILE } from "../types";
import axios from "axios";

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
      localStorage.setItem("role", response.data.role);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { role: response.data.role, token: response.data.token }
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

const currentToken = localStorage.getItem("token");

export const getDetailUser = () => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL_API}/user/myprofile`,
        method: "GET",
        headers: {
          token: currentToken
        }
      });
      console.log(response);
      dispatch({
        type: GET_DETAIL_USER,
        payload: response.data.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const formdata = new FormData();
// formdata.append("image", );

export const updateProfile = () => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL_API}/user/`,
        method: "PUT",
        headers: {
          token: currentToken
        },
        body: formdata
      });
      console.log(response);
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
