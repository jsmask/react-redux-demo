import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initinalState={};
const middleware=[thunk];

export const store = createStore(rootReducer,initinalState,applyMiddleware(...middleware));