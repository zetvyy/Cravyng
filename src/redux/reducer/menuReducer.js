import { GET_MENU, GET_DETAIL_MENU } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
  detailMenu: { loading: false, error: null, details: {} },
};

const menuReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_MENU}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_MENU}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${GET_DETAIL_MENU}_LOADING`:
      return {
        ...state,
        detailMenu: { loading: true, error: null },
      };
    case `${GET_DETAIL_MENU}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
        detailMenu: { loading: false, error: null, details: payload },
      };
    case `${GET_DETAIL_MENU}_ERROR`:
      return {
        ...state,
        detailMenu: { loading: false, error: error, details: [] },
      };
    default:
      return {
        ...state,
      };
  }
};
export default menuReducer;
