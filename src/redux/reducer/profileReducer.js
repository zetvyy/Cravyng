import { GET_SALES_SUMMARY, GET_ORDER_HISTORY } from "../types";

const initialState = {
  data: [],
  dataOne: [],
  paidTransactions: [],
  unPaidTransactions: [],
  rating: []
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SALES_SUMMARY:
      return {
        ...state,
        data: payload.data,
        dataOne: payload.dataOne,
        paidTransactions: payload.paidTransactions,
        unPaidTransactions: payload.unPaidTransactions,
        rating: payload.rating
      };
    case GET_ORDER_HISTORY:
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

export default profileReducer;
