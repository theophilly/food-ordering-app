import * as orderActionTypes from '../actionTypes/orderActionTypes.js';

const initState = {
  orders: [],
  message: '',
  status: false,
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case orderActionTypes.ON_ORDER_SUCCESS:
      const { message, order } = action.payload;
      return {
        ...state,
        message: message,
        status: true,
      };
    case orderActionTypes.ON_ORDER_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        message: error,
        status: false,
      };
    }
    case orderActionTypes.GET_USER_ORDERS_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        message: error,
      };
    }
    case orderActionTypes.GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.orders,
      };
    case orderActionTypes.EMPTY_ORDER:
      return {
        ...state,
        status: false,
      };

    default:
      return state;
  }
};
export default orderReducer;
