import {USER_NOT_EXIST, PASSWORD_NOT_CORRECT}from '../actions/login';

const showLoginMessage = (state = false, action)=> {
  switch (action.type) {
    case USER_NOT_EXIST:
      return Object.assign({}, state, {userError: action.userError});
    case PASSWORD_NOT_CORRECT:
      return Object.assign({}, state, {pwsError: action.pwsError});
    default:
      return state;
  }
};

export default showLoginMessage;