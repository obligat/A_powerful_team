import React, {Component} from 'react';
import ActivityItem from './ActivityItem';

class Activities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities:this.props.activities
    };
  }

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