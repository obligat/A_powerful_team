import request from 'superagent';

export const USER_NOT_EXIST = 'USER_NOT_EXIST';

export const PASSWORD_NOT_CORRECT = 'PASSWORD_NOT_CORRECT';

export const LOGOUT = 'LOGOUT';

export const userExist = (userError)=> {
  return {
    type: USER_NOT_EXIST,
    userError
  };
};

export const passwordCorrect = (pwsError)=> {
  return {
    type: PASSWORD_NOT_CORRECT,
    pwsError
  };
};

export const logout = ()=> {
  return {
    type: LOGOUT
  }
};

export const checkUserExist = (username)=> {
  return (dispatch)=> {
    request
        .post('/community/login/isUserExist')
        .type('form')
        .send({username: username})
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch(userExist(res.body.userError));
          }
        });
  };
};

export const checkLoginValid = (username, password)=> {
  return (dispatch)=> {
    request
        .post('/community/login/isValidLogin')
        .type('form')
        .send({
          username: username,
          password: password
        })
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch(passwordCorrect(res.body.pwsError));
          }
        });
  };
};

export const reqLogout =()=>{
  return(dispatch)=>{
    request
        .post('/community/logout')
        .end((err,res)=>{
          if(err){
            throw err;
          }else{
            dispatch(logout());
          }
        })
  }
};
