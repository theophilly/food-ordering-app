import * as actionType from '../actionTypes/authActionsTypes';
import api from '../../helpers/api.js';

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionType.LOGIN_BEGIN });

    console.log(user);

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

// export const logout = () => {
//   localStorage.clear();
//   return async (dispatch) => {
//     console.log('okay');
//     dispatch({ type: actionType.SIGN_OUT });
//   };
// };
// export const updateUser = (form) => {
//   let token = localStorage.getItem('token');

//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   }

//   return async (dispatch) => {
//     await axios
//       .post('/api/user/updateuser', form)
//       .then((res) => {
//         dispatch({
//           type: actionType.ON_UPDATE_SUCCESS,
//           payload: {
//             ...res.data,
//           },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: actionType.ON_UPDATE_ERROR,
//           payload: {
//             error: error.response.data.error,
//           },
//         });
//       });
//   };
// };
