import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({ authReducer, postReducer, cartReducer });
const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authReducer'],
};

const PersistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  PersistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistedStore = persistStore(store);

export { store, persistedStore };
