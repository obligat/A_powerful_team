import request from 'superagent';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_NAME = 'GET_USER_NAME';

export const getUserInfo = (info)=>({
  type: GET_USER_INFO,
  info
});

export const getUserName = (username)=>({
  type: GET_USER_NAME,
  username
});

export const reqUserInfo = (username)=> {

  return (dispatch)=> {
    request
        .get(`/community/userCenter/${username}`)
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch(getUserInfo(res.body));
          }
        });
  }
};

export const reqUserName = ()=> {

  return (dispatch)=> {
    request
        .get('/community/reqUserName')
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch(getUserName(res.text));
          }
        });
  }
};
