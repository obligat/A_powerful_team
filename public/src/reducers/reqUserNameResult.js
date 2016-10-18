import {GET_USER_NAME} from '../actions/showUserInfo';
import {LOGOUT} from '../actions/login';

const reqUserNameResult = (state = false, action)=> {
  switch (action.type) {
    case GET_USER_NAME:
      return action.username;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default reqUserNameResult;