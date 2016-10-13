import {combineReducers} from 'redux';
import activities from './activities';
import activityDetail from './activityDetail';
import showRegisterMessage from './showRegisterMessage';
import addNewActivity from './addNewActivity';

import showLoginMessage from './showLoginMessage';

const resultList = combineReducers({
  activities,
  activityDetail,
  showRegisterMessage,
  showLoginMessage,
  addNewActivity
});

export default resultList;
