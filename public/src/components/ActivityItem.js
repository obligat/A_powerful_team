import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class ActivityItem extends Component {
  render() {
    let {activityName,activityTime,activityLocation,instruction,maxParty} = this.props;
    return (
        <div className="activityList">
          <div className="text-center col-xs-2 activity  thumbnail">
            <a className="text-center" href="#">
              <img src={image} alt="..."/>
            </a>
            <div>{activityName}{activityTime}{activityLocation}{instruction}{maxParty}</div>
          </div>
        </div>

    );
  }
}

export default ActivityItem;