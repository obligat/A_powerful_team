import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import DoctorList from '../container/DoctorList';
import Head from './Head';
import Foot from './Foot';

class App extends Component {

  render() {
    return (
        <div>
          <Head/>
          <div className="mainer">
            <DoctorList/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default App;
