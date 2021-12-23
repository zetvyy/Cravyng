import { GET_ORDER, CREATE_NEW_ORDER, UPDATE_CHECKOUT } from "../types";

const initialState =  {
    dataOrder: [],
    isLoading: true,
    error: null,
}

const getOrderReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {

        case `${GET_ORDER}_LOADING`:
                return {
                  ...state,
                  isLoading: true,
                };
        case `${GET_ORDER}_FULFILLED`:
                return {
                  ...state,
                  dataOrder: payload,
                  isLoading: false,
                };
        case `${GET_ORDER}_ERROR`:
                return {
                  ...state,
                  isLoading: false,
                  error: error,
                };
        case `${CREATE_NEW_ORDER}_LOADING`:
                return {
                  ...state,
                  isLoading: true,
                };
        case `${CREATE_NEW_ORDER}_FULFILLED`:
                return {
                  ...state,
                  isLoading: false,
                };
        case `${CREATE_NEW_ORDER}_ERROR`:
                return {
                  ...state,
                  isLoading: false,
                  error: error,
                };
                case `${UPDATE_CHECKOUT}_LOADING`:
                  return {
                    ...state,
                    isLoading: true,
                  };
          case `${UPDATE_CHECKOUT}_FULFILLED`:
                  return {
                    ...state,
                    isLoading: false,
                  };
          case `${UPDATE_CHECKOUT}_ERROR`:
                  return {
                    ...state,
                    isLoading: false,
                    error: error,
                  };
        
            default:
                return {
                    ...state
                }
        }
    }
    export default getOrderReducer