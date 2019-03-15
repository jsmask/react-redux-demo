import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initinalState={};
const middleware=[thunk];

export const store = createStore(
    rootReducer,
    initinalState,
    compose(
       applyMiddleware(...middleware),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);