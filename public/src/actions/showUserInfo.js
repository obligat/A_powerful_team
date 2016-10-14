import request from 'superagent';

export const GET_USER_INFO = 'GET_USER_INFO';

export const getUserInfo = (info)=>({
  type: GET_USER_INFO,
  info
});

export const reqUserInfo = (username)=> {

  return (dispatch)=> {
    request
        .get('/community/userInfo')
        .query({username: username})
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch(getUserInfo(res.body));
          }
        });
  }
};

export const confirmUserInfo = ()=> {

  return (dispatch)=> {
    request
        .get('/community/confirmUserInfo')
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch({
              type: 'VALID_USER',
              data: res.body
            });
          }
        });
  }
};
