import React, {Component} from 'react';
import {Link} from 'react-router';

class Login extends Component {
  render() {

    return (
        <div className="container">

          <div className="form-group  container">
            <label className="col-xs-1 col-form-label">Username</label>
            <div className="col-xs-2">
              <input className="form-control"
                     id="username-input"
                     type="text"
                     placeholder="用户名"/>
            </div>
          </div>

          <div className="form-group  container">
            <label className="col-xs-1 col-form-label">Password</label>
            <div className="col-xs-2">
              <input className="form-control"
                     id="password-input"
                     type="text"
                     placeholder="密码"/>
            </div>
          </div>

          <Link to="/">
            <button id="cancelBulid"
                    type="button"
                    className="btn">
              <strong>登录</strong>
            </button>
          </Link>

          <Link to="/register">
            <button id="cancelBulid"
                    type="button"
                    className="btn">
              <strong>注册</strong>
            </button>
          </Link>

        </div>
    );
  }
}

export default Login;