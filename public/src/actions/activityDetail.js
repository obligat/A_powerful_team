import request from 'superagent';

export const RECEIVE_ACTIVITY_DETAIL = 'RECEIVE_ACTIVITY_DETAIL';
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';

export const requestActivityDetail = (id)=> {
    return (dispatch)=> {
        request
            .get(`/activity/${id}`)
            .end((err, res)=> {
                if (err) {
                    throw err;
                }
                else {
                    dispatch(receiveActivityDetail(res.body));
                }
            })
    }
};

export const requestCommunity = (communityName) => {
    return (dispatch)=> {
        request
            .get('/community')
            .query({communityName})
            .end((err, res)=> {
                if (err) {
                    throw err
                }
                else {
                    dispatch(receiveCommunity(res.body));
                }
            })
    }
};

export const receiveActivityDetail = (detail)=> {
    return ({
        type: RECEIVE_ACTIVITY_DETAIL,
        detail
    })
};

export const receiveCommunity = (data)=> {
    return ({
        type: RECEIVE_COMMUNITY,
        data
    })
};