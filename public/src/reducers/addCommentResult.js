import {ADD_COMMENT} from "../actions/addUserComment";

const addCommentResult = (state=false,action) =>{
  switch (action.type) {
    case ADD_COMMENT:
      return action.data;
    default:
      return state;
  }
};

export default addCommentResult;