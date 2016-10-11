import {ADD_USER} from '../actions/register';

const showRegisterMessage = (state = false, action)=> {
  switch (action.type) {
    case ADD_USER:
      return action.errorMessage;
    default:
      return state;
  }
};

export  default showRegisterMessage;