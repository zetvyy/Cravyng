import { ADD_TO_CART } from "../types";

const initialState =  {
    addCart: {},
    isLoading: true,
    error: null,
};

const addCArtReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {

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
    export default addCArtReducer