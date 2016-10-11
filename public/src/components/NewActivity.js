/**
 * Created by myc on 10/12/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class NewActivity extends Component {
  render() {
    return (
        <div className="container">

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">ActivityName</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="activityName-input"
                     type="text"
                     placeholder="活动名"/>
            </div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">ActivityTime</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="activityTime-input"
                     type="text"
                     placeholder="活动时间"/>
            </div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">ActivityLocation</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="activityLocation-input"
                     type="text"
                     placeholder="活动地点"/>
            </div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">instruction</label>
            <div className="col-xs-6">
              <textarea className="form-control"
                        rows="3"
                        placeholder="活动简介"
                        style={{height: '350px'}}>

              </textarea>
            </div>
          </div>

          <button id="addNewActivity"
                  type="button"
                  className="btn">
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