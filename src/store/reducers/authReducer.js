import * as actionType from '../actionTypes/authActionsTypes';
import { REHYDRATE } from 'redux-persist';
import getCookie from '../../helpers/getCookie.js';

const initialState = {
  loading: false,
  user: null,
  error: '',
  token: '',
  authenticated: false,
  updated: false,
};

export default function authReducer(state = initialState, action) {
  if (action.type === REHYDRATE) {
    const cookie = getCookie(action.payload?.authReducer.token);
    if (!cookie) {
      return { ...initialState };
    }
    return { ...action.payload.authReducer };
  } else if (action.type === actionType.LOGIN_BEGIN) {
    return { ...state, loading: true };
  } else if (action.type === actionType.ON_LOGIN_ERROR) {
    return { ...state, error: action.payload.error, loading: false };
  } else if (action.type === actionType.ON_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      user: action.payload.user,
      authenticated: true,
      token: action.payload.token,
    };
  } else if (action.type === actionType.SESSION_EXPIRED) {
    return { ...initialState };
  } else if (action.type === actionType.SIGN_OUT) {
    return { ...initialState };
  } else if (action.type === actionType.USER_UPDATE) {
    return {
      ...state,
      loading: false,
      user: action.payload.user,
      authenticated: true,
      token: action.payload.token,
      updated: true,
    };
  } else if (action.type === actionType.ON_UPDATE_SUCCESS) {
    return { ...state, updated: false };
  } else if (action.type === actionType.ON_UPDATE_ERROR) {
    return { ...state, error: action.payload.error };
  } else {
    return state;
  }
}
