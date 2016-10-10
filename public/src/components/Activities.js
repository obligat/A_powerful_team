import React, {Component} from "react";
import ActivityItem from "./ActivityItem";

class Activities extends Component {
  render() {
    let activity = this.props.activities;
    return (
        <div className="row scrol">
          {
            activity.map((v, k)=> (
                <ActivityItem key={k} id={v._id} activityName={v.activityName} activityTime={v.activityTime}
                              activityLocation={v.activityLocation} instruction={v.instruction}/>
            ))
          }
        </div>
    );
  }
}

export default Activities;