import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; // this is smething that is nice to use when debugging redux code, you can use chrome extenssion

import rootReducer from './root-reducer';

const middlewares = [logger];

// technically we don't need to export const's
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};