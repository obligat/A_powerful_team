import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import ActivityList from '../container/ActivityList';
import Head from './Head';
import Foot from './Foot';

class App extends Component {

  render() {
    return (
        <div>
          <Head/>
          <div className="mainer">
            <ActivityList/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default App;
