import React, {Component} from 'react';
import {Link} from 'react-router'; // eslint-disable-line no-unused-vars

class ActivityItem extends Component {
  render() {
    let {id, activityName, activityTime, activityLocation, instruction} = this.props;
    return (
      <div className="text-center col-xs-4 activity  thumbnail">

        <Link to={'/activityDetail/' + id}>
          <div style={{height: '180px'}}>
            <div>{activityName} </div>
            <div>{activityTime}</div>
            <div>{activityLocation}</div>
            <div>{instruction}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ActivityItem;
