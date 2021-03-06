import {combineReducers} from 'redux';
import activities from './activities';
import activityDetail from './activityDetail';
import showRegisterMessage from './showRegisterMessage';
import addNewActivity from './addNewActivity';
import showLoginMessage from './showLoginMessage';
import showUserInfo from './showUserInfo';
import reqUserNameResult from './reqUserNameResult';
import joinResult from './joinResult';
import addCommentResult from './addCommentResult'

const resultList = combineReducers({
  activities,
  activityDetail,
  showRegisterMessage,
  showLoginMessage,
  addNewActivity,
  showUserInfo,
  reqUserNameResult,
  joinResult,
  addCommentResult
});

export default resultList;
