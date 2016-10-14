const confirmUserResult = (state = '', action)=> {
  switch (action.type) {
    case "VALID_USER":
      return action.data;
    default:
      return state;
  }
};

export default confirmUserResult;