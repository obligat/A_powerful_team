import request from 'superagent';

export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = ()=>({
  type: ADD_COMMENT
});

export const reqAddComment = (id,username,userComment)=> {
  return (dispatch)=> {
    request
        .post(`/activity/addComment/${id}`)
        .send({username:username,userComment:userComment})
        .type('form')
        .end((err,res)=>{
          dispatch(addComment());
        })
  }
};
