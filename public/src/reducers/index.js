import {combineReducers} from 'redux';
import doctors from './doctors';

const resultList = combineReducers({
  doctors
});

export default resultList;
