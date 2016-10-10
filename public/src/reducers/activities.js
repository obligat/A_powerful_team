/**
 * Created by myc on 10/1/16.
 */
const activities = (state = [], action)=> {
  switch (action.type) {
    case 'ACTIVITY_LOADED':
      return action.data;
  }
  return state;
};

export default activities;