import * as actionType from '../actionTypes/authActionsTypes';
import api from '../../helpers/api.js';

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionType.LOGIN_BEGIN });

    await api
      .signIn({ email: user.loginEmail, password: user.loginPassword })
      .then((res) => {
        dispatch({
          type: actionType.ON_LOGIN_SUCCESS,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: actionType.ON_LOGIN_ERROR,
          payload: {
            error: error.response.data.error,
          },
        });
      });
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionType.LOGIN_BEGIN });

    await api
      .signUp({ ...user })
      .then((res) => {
        dispatch({
          type: actionType.ON_LOGIN_SUCCESS,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: actionType.ON_LOGIN_ERROR,
          payload: {
            error: error.response.data.error,
          },
        });
      });
  };
};
export const updateUser = (user) => {
  return async (dispatch) => {
    await api
      .update({ ...user })
      .then((res) => {
        dispatch({
          type: actionType.USER_UPDATE,
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
            type: actionType.ON_UPDATE_ERROR,
            payload: {
              error: error.response.data.error,
            },
          });
        }
      });
  };
};
export const updatePassword = (user) => {
  return async (dispatch) => {
    await api
      .updatepassword({ ...user })
      .then((res) => {
        dispatch({
          type: actionType.USER_UPDATE,
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
            type: actionType.ON_UPDATE_ERROR,
            payload: {
              error: error.response.data.error,
            },
          });
        }
      });
  };
};
