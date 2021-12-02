import { GET_MENU } from "../types";

const initialState = {
    data: [],
    isLoading: true,
    error: null,
};

const menuReducer = (state = initialState, action) => {
    const {type, payload, error} = action;
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
        default:
            return {
                ...state
            }
    }
}
export default menuReducer