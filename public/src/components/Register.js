import React, {Component} from 'react';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPasswordEqual: '',
      passwordFormatError: ''
    };
  }

  checkPasswordFormat() {
    let password = this.refs.password.value;
    let pattern = /^.{6,12}$/;
    let bool = pattern.test(password);
    if (!bool) {
      this.setState({
        passwordFormatError: '密码长度为6～16位'
      });
    }
    else {
      this.setState({
        passwordFormatError: ''
      });
    }

  }

  checkPasswordSame() {
    let password = this.refs.password.value;
    let rePassword = this.refs.rePassword.value;
    if (!(password === rePassword)) {
      this.setState({
        isPasswordEqual: '密码输入不一致'
      });
    }
    else {
      this.setState({
        isPasswordEqual: ''
      });
    }
  }

  handleClick() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let rePassword = this.refs.rePassword.value;
    let communityName = this.refs.communityName.value;
    let selectSchool = this.refs.selectSchool.value;
    if (password === rePassword) {
      this.props.reqAddUser(username, password, communityName, selectSchool);
    }
  }

  componentWillUpdate(nextProps) {
    let userError = nextProps.showRegisterMessage.error;
    if (userError === '') {
      this.props.router.push('/login');
    }
  }

  render() {

    let userError = this.props.showRegisterMessage.error;

    return (
        <div className="container">

          <div className="form-group  container">
            <label className="col-xs-2 col-form-label">Username</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="username-input"
                     type="text"
                     placeholder="用户名"
                     ref='username'/>
            </div>
            <div className="col-xs-4">{userError}</div>
          </div>
          <div className="form-group  container">
            <label htmlFor="password-input" className="col-xs-2 col-form-label">Password</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="password-input"
                     type="password"
                     placeholder="密码"
                     ref='password'
                     onBlur={this.checkPasswordFormat.bind(this)}/>
            </div>
            <div className="col-xs-4"> {this.state.passwordFormatError}</div>
          </div>
          <div className="form-group  container">
            <label htmlFor="password-input" className="col-xs-2 col-form-label">ConfirmPassword</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="password-input-again"
                     type="password"
                     placeholder="确认密码"
                     ref='rePassword'
                     onBlur={this.checkPasswordSame.bind(this)}/>
            </div>
            <div className="col-xs-4">{this.state.isPasswordEqual}</div>
          </div>
          <div className="form-group  container">
            <label htmlFor="community-name-input" className="col-xs-2 col-form-label">CommunityName</label>
            <div className="col-xs-6">
              <input className="form-control"
                     id="username-input"
                     type="text"
                     placeholder="社团名"
                     ref='communityName'/>
            </div>
          </div>
          <div>
            <form>
              <label>选择学校</label>
              <select
                  ref="selectSchool">
                <option >请选择学校</option>
                <option >西安邮电大学</option>
                <option >西安政法大学</option>
                <option >陕西师范大学</option>
                <option >西安工业大学</option>
                <option >合肥工业大学</option>
                <option >江苏大学</option>
                <option >西北大学</option>
              </select>
            </form>
          </div>

          <button id="register"
                  type="button"
                  className="btn"
                  onClick={this.handleClick.bind(this)}>
            <strong>注册</strong>
          </button>
        </div>
    );
  }
}


export default Register;
