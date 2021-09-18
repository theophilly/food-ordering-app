import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({ authReducer, postReducer, cartReducer });
const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
