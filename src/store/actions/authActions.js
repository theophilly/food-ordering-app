import * as actionType from '../actionTypes/authActionsTypes';
import axios from '../../utils/axios';

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionType.LOGIN_BEGIN });

    console.log(user);

    await axios
      .post('/api/user/signin', { ...user })
      .then((res) => {
        // localStorage.setItem('token', res.data.token);
        // localStorage.setItem('user', JSON.stringify(res.data.user));
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
            error: error.response.data.message,
          },
        });
      });
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionType.LOGIN_BEGIN });

    await axios
      .post('/api/user/signup', { ...user })
      .then((res) => {
        dispatch({
          type: actionType.ON_LOGIN_SUCCESS,
          payload: {
            ...res.data,
          },
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      })
      .catch((error) => {
        dispatch({
          type: actionType.ON_LOGIN_ERROR,
          payload: {
            error: error.response.data.message,
          },
        });
      });
  };
};

export const logout = () => {
  localStorage.clear();
  return async (dispatch) => {
    console.log('okay');
    dispatch({ type: actionType.SIGN_OUT });
  };
};
export const updateUser = (form) => {
  let token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return async (dispatch) => {
    await axios
      .post('/api/user/updateuser', form)
      .then((res) => {
        dispatch({
          type: actionType.ON_UPDATE_SUCCESS,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: actionType.ON_UPDATE_ERROR,
          payload: {
            error: error.response.data.message,
          },
        });
      });
  };
};
