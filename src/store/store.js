//2
import { createStore, applyMiddleware } from 'redux';
//8
import reducers from '../reducers/index';
import logger from 'redux-logger';

const store = createStore(reducers, applyMiddleware(logger));

export default store;
