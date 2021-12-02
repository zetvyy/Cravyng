import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

const initialState = {
  data: []
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: payload
      };
    case REGISTER_FAIL:
      return {
        ...state,
        data: payload
      };
    default: {
      return {
        ...state,
        payload
      };
    }
  }
};

export default authReducer;
