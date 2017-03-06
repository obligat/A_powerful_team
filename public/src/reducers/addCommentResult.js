import {ADD_COMMENT} from "../actions/addUserComment";

const addCommentResult = (state=false,action) =>{
  switch (action.type) {
    case ADD_COMMENT:
      return action;
    default:
      return state;
  }
};

export default addCommentResult;