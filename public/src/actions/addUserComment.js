import request from 'superagent';

export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (data)=>({
  type: ADD_COMMENT,
  data
});

export const reqAddComment = (id,username,userComment)=> {
  return (dispatch)=> {
    request
        .post(`/activity/addComment/${id}`)
        .send({username:username,userComment:userComment})
        .type('form')
        .end((err,res)=>{
          dispatch(addComment(res.body.message));
        })
  }
};
