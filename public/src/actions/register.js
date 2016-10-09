import request from 'superagent';

export const ADD_USER = 'ADD_USER';

export const addUser = (errorMessage)=>({
    type: ADD_USER,
    errorMessage
});

export const reqAddUser = (username, password)=> {
    return (dispatch)=> {
        request
            .post('/community/register')
            .type('form')
            .send({
                username: username,
                password: password
            })
            .end((err, res)=> {
                if (err) {
                    throw err;
                } else {
                    dispatch(addUser(res.body.error));
                }
            });
    };
};