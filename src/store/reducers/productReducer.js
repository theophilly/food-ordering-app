import * as actionType from '../actionTypes/postActionTypes';

const intialState = {
  products: [],
  loading: false,
  error: '',
  message: '',
};
export default function productReducer(state = intialState, action) {
  if (action.type === actionType.ON_PRODUCT_FETCH_BEGIN) {
    return { ...state, loading: true };
  } else if (action.type === actionType.ON_PRODUCT_FETCH_ERROR) {
    return { ...state, error: action.payload.error, loading: false };
  } else if (action.type === actionType.ON_PRODUCT_FETCH_SUCCESS) {
    return { ...state, products: action.payload.products, loading: false };
  } else {
    return state;
  }
}
