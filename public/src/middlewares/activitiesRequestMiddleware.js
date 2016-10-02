import request from 'superagent';

const activitiesRequestMiddleware = store=> next=> action=> {

  switch (action.type) {
  case 'INIT':
    request.get('/activity')
        .end((err, res)=> {
          next({
            type: 'ACTIVITY_LOADED',
            data: res.body
          });
        });
    break;
  }
  next(action);
};

export default activitiesRequestMiddleware;
