import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router';
import App from './components/App';
import Main from './components/Main';
import Register from './container/Register';
import Login from './components/Login';
import activityList from './reducers';
import ActivityDetail from './container/ActivityDetail';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import activitiesRequestMiddleware from './middlewares/activitiesRequestMiddleware';

const store = createStore(
  activityList,
  applyMiddleware(activitiesRequestMiddleware, thunkMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' components={App}>
        <IndexRoute components={Main}/>
        <Route path='/register' components={Register}/>
        <Route path='/login' components={Login}/>
        <Route path="/activityDetail/:id" components={ActivityDetail}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);