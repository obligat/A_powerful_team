/**
 * Created by myc on 10/12/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class NewActivity extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    let activityName = this.refs.activityName.value;
    let activityTime = this.refs.activityTime.value;
    let activityLocation = this.refs.activityLocation.value;
    let instruction = this.refs.instruction.value;
    this.props.reqAddActivity(activityName, activityTime, activityLocation, instruction);
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
                     ref='activityName'/>
            </div>
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
                     ref='activityLocation'/>
            </div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">instruction</label>
            <div className="col-xs-6">
              <textarea className="form-control"
                        id="instruction-input"
                        placeholder="活动简介"
                        style={{height: '350px'}}
                        ref='instruction'>

              </textarea>
            </div>
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

export default NewActivity;