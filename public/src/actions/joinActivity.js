import request from 'superagent';

export const JOIN_ACTIVITY = 'JOIN_ACTIVITY';

export const joinActivity = (data)=>({
  type: JOIN_ACTIVITY,
  data
});

export const reqJoinActivity = (id,username)=> {
  return (dispatch)=> {
    request
        .post(`/activity/join/${id}`)
        .send({username:username})
        .type('form')
        .end((err,res)=>{
          dispatch(joinActivity(res.body.message));
        })
  }
};
