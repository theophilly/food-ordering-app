import * as actionType from '../actionTypes/orderActionTypes';
import api from '../../helpers/api.js';

export const processOrder = (order) => {
  return async (dispatch) => {
    await api
      .addorder(order)
      .then((res) => {
        dispatch({
          type: actionType.ON_ORDER_SUCCESS,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          dispatch({
            type: 'SIGN_OUT',
            payload: {
              error: 'session expired',
            },
          });
        } else {
          dispatch({
            type: actionType.ON_ORDER_ERROR,
            payload: {
              error: error.response.data.error,
            },
          });
        }
      });
  };
};

export const getUserOrders = () => {
  return async (dispatch) => {
    await api
      .getuserorders()
      .then((res) => {
        dispatch({
          type: actionType.GET_USER_ORDERS_SUCCESS,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: actionType.GET_USER_ORDERS_ERROR,
          payload: {
            error: error.response.data.error,
          },
        });
      });
  };
};
