import React, {Component} from "react";
import {connect} from 'react-redux';
import {reqJoinActivity} from '../actions/joinActivity';

class ActivityDetail extends Component {

  componentDidMount() {
    let {id} = this.props.params;
    this.props.requestActivityDetail(id);
  }

  handleClick() {
    let {id} = this.props.params;
    let username = this.props.reqUserNameResult;
    this.props.reqJoinActivity(id, username);

  }

  render() {
    const {creator, activityName, activityTime, activityLocation, instruction, participator}=this.props.activityDetail;
    return (
        <div>
          <div>
            <div className="col-xs-8">
              <div>活动名称：{activityName}</div>
              <div>举办者：{creator}</div>
              <div>举办时间：{activityTime}</div>
              <div>举办地点：{activityLocation}</div>
              <div>参加者：
                {
                  (participator) ?
                      participator.map((v, k)=> {
                        return (
                            <li key={k}>{v}</li>
                        );
                      }) : []}
                {this.props.joinResult}
              </div>
              <button onClick={this.handleClick.bind(this)}>参加此活动</button>
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
              <textarea className="form-control" rows="3" style={{width: '700px'}}/>
              <button className="btn btn-info">回复</button>
            </div>
          </div>

        </div>

    );
  }
}

const mapStateToProps = (state)=>state;
const mapDispatchToProps = (dispatch)=> {
  return {
    reqJoinActivity: (id, username)=> {
      dispatch(reqJoinActivity(id, username));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetail);


