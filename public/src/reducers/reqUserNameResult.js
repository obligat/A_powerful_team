import {GET_USER_NAME} from '../actions/showUserInfo';

const reqUserNameResult = (state = false, action)=> {
  switch (action.type) {
    case GET_USER_NAME:
      return action.username;
    default:
      return state;
  }
};

export default reqUserNameResult;