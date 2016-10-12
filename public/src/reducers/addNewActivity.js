/**
 * Created by myc on 10/12/16.
 */
import {ADD_ACTIVITY} from '../actions/newActivity';

const addNewActivity = (state = false, action)=> {
  switch (action.type) {
    case ADD_ACTIVITY:
      return action.errorMessage;
    default:
      return state;
  }
};

export  default addNewActivity;