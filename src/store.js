import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/index';

const initinalState={};
const middleware=[thunk];

export const store = createStore(rootReducers,initinalState,applyMiddleware(...middleware));