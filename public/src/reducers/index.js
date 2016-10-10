import {combineReducers} from "redux";
import activities from "./activities";
import activityDetail from "./activityDetail";
import showRegisterMessage from "./showRegisterMessage";

const resultList = combineReducers({
  activities,
  activityDetail,
  showRegisterMessage
});

export default resultList;
