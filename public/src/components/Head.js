import React, {Component} from "react";
import {Link} from "react-router";// eslint-disable-line no-unused-vars

class Head extends Component {
  render() {
    return (
        <div className="row head">
          <div className="col-xs-4 col-md-1">
            <div className="thumbnail">
              <img src="images/logo.jpg" alt="iPet logo"></img>
            </div>
          </div>
          <div className="col-xs-8 ">
            <Link to="/login"><span>登陆    </span></Link>
            <Link to="/register"><span>注册    </span></Link>
          </div>
        </div>
    );
  }
}
export default Head;