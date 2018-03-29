//7
import counter from '../reducers/counterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  counter: counter,
});
