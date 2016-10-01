import  React, {Component} from 'react';
import ActivityItem from './ActivityItem';

class Activities extends Component {
  render() {
    let activity = this.props.activities;
    return (
        <div className="row scrol">
          {
            activity.map((v, k)=> (
                <ActivityItem key={k+1}  
                              activityName={v.name} 
                              image={v.image} 
                              activityTime={v.activityTime}
                              activityLocation={v.activityLocation}
                              instruction={v.instruction}
                              maxParty={v.maxParty}
                />
            ))
          }
        </div>
    );
  }
}

export default Activities;