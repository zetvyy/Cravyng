import { GET_DISCOUNT, PUT_DISCOUNT } from "../types";

const initialState = {
    dataDiscount: [],
    dataUpdateDiscount: [],
    isLoading: true,
    error: null,
}

const discountReducer = (state = initialState, action) => {
    const {type, payload, error } = action;
    switch (type) {
        case `${GET_DISCOUNT}_LOADING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${GET_DISCOUNT}_FULFILLED`:
            return {
                ...state,
                dataDiscount: payload,
                isLoading: true,
            };
        case `${GET_DISCOUNT}_ERROR`:
            return {
                ...state,
                isLoading: true,
                error: error,
            };
        case `${PUT_DISCOUNT}_LOADING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${PUT_DISCOUNT}_FULFILLED`:
            return {
                ...state,
                dataUpdateDiscount: payload,
                isLoading: true,
            };
        case `${PUT_DISCOUNT}_ERROR`:
            return {
                ...state,
                isLoading: true,
                error: error,
            };
            default:
                return {
                    ...state
                }
        
        
    }
}
export default discountReducer