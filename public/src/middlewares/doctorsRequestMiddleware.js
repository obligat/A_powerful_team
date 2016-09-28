import request from 'superagent';

const doctorRequestMiddleware = store=> next=> action=> {

  switch (action.type) {
  case 'INIT':
    request.get('/doctors')
        .end((err, res)=> {
          next({
            type: 'DOCTORS_LOADED',
            data: res.body
          });
        });
    break;
  }
  next(action);
};

export default doctorRequestMiddleware;
