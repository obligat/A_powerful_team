import React, {Component} from "react";

class Register extends Component {

  handlerClick() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.reqAddUser(username, password);
  }

  render() {
    return (
        <div>

          <div className="form-group ">
            <label htmlFor="username-input" className="col-xs-2 col-form-label">Username</label>
            <div className="col-xs-10">
              <input className="form-control"
                     id="username-input"
                     type="text"
                     placeholder="用户名"
                     ref='username'/>
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="password-input" className="col-xs-2 col-form-label">Password</label>
            <div className="col-xs-10">
              <input className="form-control"
                     id="password-input"
                     type="password"
                     placeholder="密码"
                     ref='password'/>
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="password-input" className="col-xs-2 col-form-label">Password</label>
            <div className="col-xs-10">
              <input className="form-control"
                     id="password-input-again"
                     type="password"
                     placeholder="确认密码"
                     ref='rePassword'/>
            </div>
          </div>
          <div>
            <form>
              <label>选择学校</label>
            </form>
          </div>
          <div>{this.props.showRegisterMessage}</div>
          <button id="register"
                  type="button"
                  className="btn"
                  onClick={this.handlerClick.bind(this)}>
            <strong>注册</strong>
          </button>
        </div>
    );

  }
}


export default Register;
