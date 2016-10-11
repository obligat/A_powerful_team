import React, {Component} from 'react';
import {Link} from 'react-router';

export default class SideBar extends Component {
  render() {
    return (
        <div className="col-xs-3">
          <div>
            <img src="images/logo.jpg" alt="iPet logo"></img>
          </div>
          <div>
            <Link to="/newActivity"><span>新建活动</span></Link>
          </div>
          <div>
            <Link to="/"><span>我发布的活动</span></Link>
          </div>
          <div>
            <Link to="/"><span>我参加的活动</span></Link>
          </div>
          <div>
            <Link to="/login"><span>退出</span></Link>
          </div>
        </div>
    );
  }
}
