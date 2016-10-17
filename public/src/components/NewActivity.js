/**
 * Created by myc on 10/12/16.
 */
import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {reqUserName} from "../actions/showUserInfo";

class NewActivity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRightActivityName: '',
      isRightActivityTime: '',
      isRightActivityLocation: '',
      isRightInstruction: '',
    };
  }

  componentDidMount() {
    this.props.reqUserName();
  }

  checkName() {
    let activityName = this.refs.activityName.value;
    let isRigth = /^[\u4e00-\u9fa50-9a-zA-Z]{3,}$/;
    let isTrue = isRigth.test(activityName);
    if (!isTrue) {
      this.setState({
        isRightActivityName: '活动名至少为3位汉子字母或数字组成'
      });
    }
    else {
      this.setState({
        isRightActivityName: ''
      });
    }
  }

  checkLocation() {
    let activityLocation = this.refs.activityLocation.value;
    let isRigth = /^[\u4e00-\u9fa50-9a-zA-Z]{5,}$/;
    let isTrue = isRigth.test(activityLocation);
    if (!isTrue) {
      this.setState({
        isRightActivityLocation: '活动地点至少为5位汉子字母或数字组成'
      });
    }
    else {
      this.setState({
        isRightActivityLocation: ''
      });
    }
  }

  checkInstruction() {
    let instruction = this.refs.instruction.value;
    let isRigth = /^[\u4e00-\u9fa50-9a-zA-Z]{15,}$/;
    let isTrue = isRigth.test(instruction);
    if (!isTrue) {
      this.setState({
        isRightInstruction: '活动介绍至少为15位汉子字母或数字组成'
      });
    }
    else {
      this.setState({
        isRightInstruction: ''
      });
    }
  }

  handleClick() {
    let activityName = this.refs.activityName.value;
    let activityTime = this.refs.activityTime.value;
    let activityLocation = this.refs.activityLocation.value;
    let instruction = this.refs.instruction.value;
    let stateRight1 = this.state.isRightActivityLocation;
    let stateRight2 = this.state.isRightActivityName;
    let stateRight3 = this.state.isRightActivityTime;
    let stateRight4 = this.state.isRightInstruction;
    let username = this.props.reqUserNameResult;
    if (stateRight1 === '' && stateRight2 === '' && stateRight3 === '' && stateRight4 === '') {
      this.props.reqAddActivity(username, activityName, activityTime, activityLocation, instruction);
      alert('新建活动成功，点击确定回到首页！');
      this.props.router.push('/main');
    }
  }

  render() {
    return (
        <div className="container">

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">ActivityName</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="activityName-input"
                     type="text"
                     placeholder="活动名"
                     ref='activityName'
                     onBlur={this.checkName.bind(this)}/>
            </div>
            <div className="col-xs-4">{this.state.isRightActivityName}</div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">ActivityTime</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="activityTime-input"
                     type="text"
                     placeholder="活动时间"
                     ref='activityTime'/>
            </div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">ActivityLocation</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="activityLocation-input"
                     type="text"
                     placeholder="活动地点"
                     ref='activityLocation'
                     onBlur={this.checkLocation.bind(this)}/>
            </div>
            <div className="col-xs-4">{this.state.isRightActivityLocation}</div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">instruction</label>
            <div className="col-xs-6">
              <textarea className="form-control"
                        id="instruction-input"
                        placeholder="活动简介"
                        style={{height: '350px'}}
                        ref='instruction'
                        onBlur={this.checkInstruction.bind(this)}>

              </textarea>
            </div>
            <div className="col-xs-4">{this.state.isRightInstruction}</div>
          </div>

          <button id="addNewActivity"
                  type="button"
                  className="btn"
                  onClick={this.handleClick.bind(this)}>
            <strong>新建</strong>
          </button>

          <Link to="/">
            <button id="cancelBulid"
                    type="button"
                    className="btn">
              <strong>取消</strong>
            </button>
          </Link>

        </div>
    );
  }
}

const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch)=> {
  return {
    reqUserName: ()=> {
      dispatch(reqUserName());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity);
