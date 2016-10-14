import {GET_USER_INFO} from '../actions/showUserInfo';

const showUserInfo = (state = '', action)=> {
  switch (action.type) {
    case GET_USER_INFO:
      return action.info;
    default:
      return state;
  }
};

export default showUserInfo;