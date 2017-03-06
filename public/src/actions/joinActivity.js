import request from 'superagent';

export const JOIN_ACTIVITY = 'JOIN_ACTIVITY';

export const joinActivity = ()=>({
  type: JOIN_ACTIVITY
});

export const reqJoinActivity = (id,username)=> {
  return (dispatch)=> {
    request
        .post(`/activity/join/${id}`)
        .send({username:username})
        .type('form')
        .end((err,res)=>{
          dispatch(joinActivity());
        })
  }
};
