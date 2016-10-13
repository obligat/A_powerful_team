import {combineReducers} from 'redux';
import activities from './activities';
import activityDetail from './activityDetail';
import showRegisterMessage from './showRegisterMessage';
import showLoginMessage from './showLoginMessage';

const resultList = combineReducers({
  activities,
  activityDetail,
  showRegisterMessage,
  showLoginMessage
});

export default resultList;
