import {combineReducers} from 'redux';
import activities from './activities';
import activityDetail from './activityDetail';
import showRegisterMessage from './showRegisterMessage';
import addNewActivity from './addNewActivity';


const resultList = combineReducers({
  activities,
  activityDetail,
  showRegisterMessage,
  addNewActivity,
});

export default resultList;
