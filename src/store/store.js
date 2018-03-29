//2
import { createStore } from 'redux';
//8
import reducers from '../reducers/index';

const store = createStore(reducers);

export default store;
