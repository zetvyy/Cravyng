import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, GET_DETAIL_USER, LOGIN_FAIL, UPDATE_PROFILE } from "../types";

const initialState = {
  data: [],
  token: localStorage.getItem("token") || false,
  role: localStorage.getItem("role") || false,
  Order: localStorage.getItem("Order") || false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        role: payload.role,
        token: payload.token,
        Order: payload.Order.id,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: payload,
      };
    case GET_DETAIL_USER:
      return {
        ...state,
        data: payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        data: payload,
      };

    default: {
      return {
        ...state,
        payload,
      };
    }
  }
};

export default authReducer;
