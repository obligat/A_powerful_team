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

          <div className="input-group">
            <label className="input-group-addon">用户名</label>
            <input className="form-control"
                   id="username-input"
                   type="text"
                   placeholder="用户名"
                   ref="username"
                   onBlur={this.checkUserExist.bind(this)}
            />
            <div>{this.state.usernameError}</div>
            <label className="input-group-addon">密码</label>
            <input className="form-control"
                   id="password-input"
                   type="password"
                   placeholder="密码"
                   ref="password"
            />
            <div>{this.state.passwordError}</div>

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

          <div className="control-group warning">
            <label className="control-label" htmlFor="inputWarning">用户名</label>
            <div className="controls">
              <input type="text" id="inputWarning"/>
              <span className="help-inline">{this.state.usernameError}</span>
            </div>
          </div>

          <form className="form-search">
            <input type="text" className="input-medium search-query"/>
              <button type="submit" className="btn">Search</button>
          </form>

          <form className="form-inline">
            <input type="text" className="input-small" placeholder="Email"/>
              <input type="password" className="" placeholder="Password"/>
                <label className="checkbox">
                  <input type="checkbox"/> Remember me
                </label>
            <button type="button" className="btn btn-outline-primary">Primary</button>
            <button type="button" className="btn btn-warning-outline">Warning</button>

          </form>

        </div>

    );
  }
}

export default Login;