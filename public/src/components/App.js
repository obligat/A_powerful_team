import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Head from './Head';
import Foot from './Foot';


class App extends Component {

  render() {
    return (
      <div>
        <Head/>
        {this.props.children}
        <Foot/>
      </div>
    );
  }
}

export default App;
