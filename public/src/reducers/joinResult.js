import {JOIN_ACTIVITY} from '../actions/joinActivity';

const joinResult = (state = false, action)=> {
  switch (action.type) {
    case JOIN_ACTIVITY:
      return action.data;
    default:
      return state;
  }
};

export default joinResult;