import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router';
import App from './components/App';
import Main from './components/Main';
import UserCenter from './components/UserCenter';
import Register from './container/Register';
import Login from './container/Login';
import NewActivity from './container/NewActivity';
import activityList from './reducers';
import ActivityDetail from './container/ActivityDetail';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import activitiesRequestMiddleware from './middlewares/activitiesRequestMiddleware';

const store = createStore(
    activityList,
    applyMiddleware(activitiesRequestMiddleware, thunkMiddleware, createLogger())
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' components={App}>
          <IndexRoute components={Login}/>
          <Route path='/register' components={Register}/>
          <Route path='/main' components={Main}/>
          <Route path='/userCenter/:username' components={UserCenter}/>
          <Route path='/login' components={Login}/>
          <Route path="/activityDetail/:id" components={ActivityDetail}/>
          <Route path="/newActivity" components={NewActivity}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);
