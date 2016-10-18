import React, {Component} from 'react';
import ActivityItem from './ActivityItem';

class Activities extends Component {

  render() {
    return (
        <div>
          {
            this.props.showType.map((v, k)=> (
                <ActivityItem key={k} id={v._id} activityName={v.activityName} activityTime={v.activityTime}
                              activityLocation={v.activityLocation} instruction={v.instruction}
                />
            ))
          }
        </div>
    );
  }
}

export default Activities;