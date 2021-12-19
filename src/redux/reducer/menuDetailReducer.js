import { GET_MENU_DETAIL, ADD_TO_CART } from "../types";

const initialState =  {
    dataDetailMenu: {},
    isLoading: true,
    error: null,
};

const menuDetailReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case `${GET_MENU_DETAIL}_LOADING`:
            return {
                ...state,
            };
        case `${GET_MENU_DETAIL}_FULFILLED`:
            // console.log(payload)
            return {
                ...state,
                dataDetailMenu: payload,
                isLoading: false,
            };
        case `${GET_MENU_DETAIL}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error.message,
            };

        case `${ADD_TO_CART}_LOADING`:
                return {
                  ...state,
                  isLoading: true,
                };
        case `${ADD_TO_CART}_FULFILLED`:
                return {
                  ...state,
                  addToCart: payload,
                  isLoading: false,
                };
        case `${ADD_TO_CART}_ERROR`:
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
    export default menuDetailReducer