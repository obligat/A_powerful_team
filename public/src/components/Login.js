import React, {Component} from 'react';
import {Link} from 'react-router';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameError: '',
      passwordError: ''
    };
  }

  checkUserExist() {
    let username = this.refs.username.value;
    this.props.checkUserExist(username);

  }

  handleClick() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.checkLoginValid(username, password);
  }

  componentWillReceiveProps(nextProps) {
    let usernameError = nextProps.showLoginMessage.userError;
    let passwordError = nextProps.showLoginMessage.pwsError;

    this.setState({
      usernameError: usernameError,
      passwordError: passwordError
    });
  }

  componentWillUpdate(nextProps) {
    let usernameError = nextProps.showLoginMessage.userError;
    let passwordError = nextProps.showLoginMessage.pwsError;
    if (usernameError === '' && passwordError === '') {
      this.props.router.push('/main');
    }
  }

  render() {


    return (
        <div className="container">

          <div className="form-group  container">
            <label className="col-xs-1 col-form-label">Username</label>
            <div className="col-xs-2">
              <input className="form-control"
                     id="username-input"
                     type="text"
                     placeholder="用户名"
                     ref="username"
                     onBlur={this.checkUserExist.bind(this)}
              />
            </div>
            <span className="col-xs-6">{this.state.usernameError}</span>
          </div>

          <div className="form-group  container">
            <label className="col-xs-1 col-form-label">Password</label>
            <div className="col-xs-2">
              <input className="form-control"
                     id="password-input"
                     type="password"
                     placeholder="密码"
                     ref="password"
              />
            </div>
            <span className="col-xs-6">{this.state.passwordError}</span>
          </div>


          <button id="cancelBulid"
                  type="button"
                  className="btn"
                  onClick={this.handleClick.bind(this)}>
            <strong>登录</strong>
          </button>


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