import * as actionType from '../actionTypes/authActionsTypes';

const initialState = {
  loading: false,
  user: null,
  error: '',
  token: '',
  authenticated: false,
  updated: false,
};

export default function authReducer(state = initialState, action) {
  if (action.type === actionType.LOGIN_BEGIN) {
    return { ...state, loading: true };
  } else if (action.type === actionType.ON_LOGIN_ERROR) {
    return { ...state, error: action.payload.error, loading: false };
  } else if (action.type === actionType.ON_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      user: action.payload.user,
      authenticated: true,
      // token: action.payload.token,
    };
  } else if (action.type === actionType.SESSION_EXPIRED) {
    return { ...initialState };
  } else if (action.type === actionType.SIGN_OUT) {
    return { ...initialState };
  } else if (action.type === actionType.ON_UPDATE_SUCCESS) {
    return { ...state, user: action.payload.user, updated: true };
  } else if (action.type === actionType.ON_UPDATE_ERROR) {
    return { ...state, error: action.payload.error, updated: false };
  } else {
    return state;
  }
}
