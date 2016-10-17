/**
 * Created by myc on 10/12/16.
 */
import request from "superagent";

export const ADD_ACTIVITY = 'ADD_ACTIVITY';

export const addActivity = (errorMessage)=>({
  type: ADD_ACTIVITY,
  errorMessage
});

export const reqAddActivity = (username, activityName, activityTime, activityLocation, instruction)=> {
  return (dispatch)=> {
    request
        .post('/activity/save')
        .type('form')
        .send({
          username: username,
          activityName: activityName,
          activityTime: activityTime,
          activityLocation: activityLocation,
          instruction: instruction
        })
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch(addActivity(res.body.error));
          }
        });
  };
};