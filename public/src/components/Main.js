import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import ActivityList from '../container/ActivityList';
import SideBar from './SideBar';

class Main extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <SideBar/>
                    <ActivityList/>
                </div>
            </div>
        );
    }
}

export default Main;
