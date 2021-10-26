import * as actionType from '../actionTypes/postActionTypes';
import api from '../../helpers/api.js';

export const getAllMeals = () => {
  return async (dispatch) => {
    dispatch({ type: actionType.ON_PRODUCT_FETCH_BEGIN });

    await api
      .fetchmeals()
      .then((res) => {
        dispatch({
          type: actionType.ON_PRODUCT_FETCH_SUCCESS,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: actionType.ON_PRODUCT_FETCH_ERROR,
          payload: {
            error: error.response.data.error,
          },
        });
      });
  };
};
