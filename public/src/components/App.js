import React, {Component} from "react";
import ActivityList from "../container/ActivityList";
import SideBar from "./SideBar";
import Head from "./Head";
import Foot from "./Foot"; // eslint-disable-line no-unused-vars


class App extends Component {

  render() {
    return (
        <div>
          <Head/>
          <div className="container">
            <SideBar/>
            <ActivityList/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default App;
