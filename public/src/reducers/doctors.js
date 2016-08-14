const doctors = (state=[], action)=> {
  switch (action.type) {
  case 'DOCTORS_LOADED':
    return action.data;
  }
  return state;
};

export default doctors;