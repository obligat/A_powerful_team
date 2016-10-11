import {RECEIVE_ACTIVITY_DETAIL} from '../actions/activityDetail';

const activityDetail = (state = [], action)=> {
  switch (action.type) {
    case RECEIVE_ACTIVITY_DETAIL:
      return action.detail;
    default :
      return state;
  }
};

export default activityDetail;