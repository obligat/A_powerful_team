import React, {Component} from "react";


export default class ActivityDetail extends Component {

  componentDidMount() {
    let {id} = this.props.params;
    this.props.requestActivityDetail(id);
  }
  
  render() {
    const {creator, activityName, activityTime, activityLocation, instruction,participator}=this.props.activityDetail;
    return (
        <div>
          <div>
            <div className="col-xs-8">
              <div>活动名称：{activityName}</div>
              <div>举办者：{creator}</div>
              <div>举办时间：{activityTime}</div>
              <div>举办地点：{activityLocation}</div>
              <div>参加者：{participator}</div>
            </div>
          </div>
          <div className="col-xs-8">
            活动简介：{instruction}
          </div>

          <div className="col-xs-8">
            <div>
              评论：
            </div>
            <div>
              <textarea className="form-control" rows="3" style={{width: '700px'}}></textarea>
              <button className="btn btn-info">回复</button>
            </div>
          </div>

        </div>

    );
  }
}
