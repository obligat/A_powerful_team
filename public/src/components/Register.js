import React, {Component} from 'react';
import {Link} from 'react-router';

class Register extends Component {

    handlerClick() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let communityName = this.refs.communityName.value;
        this.props.reqAddUser(username, password,communityName);
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
                <div className="form-group ">
                    <label htmlFor="community-name-input" className="col-xs-2 col-form-label">CommunityName</label>
                    <div className="col-xs-10">
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
                        <select>
                            <option value="西安邮电大学">西安邮电大学</option>
                            <option value="西安政法大学">西安政法大学</option>
                            <option value="陕西师范大学">陕西师范大学</option>
                            <option value="西安工业大学">西安工业大学</option>
                            <option value="合肥工业大学">合肥工业大学</option>
                            <option value="江苏大学">江苏大学</option>
                            <option value="西北大学">西北大学</option>
                        </select>
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
