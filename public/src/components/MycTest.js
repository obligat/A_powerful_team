/**
 * Created by myc on 8/22/16.
 */
import React, {Component} from "react";

class MycTest extends Component {
  render() {
    return (
        <div className='login-content'>
          <ul className='user-login-list' id='user-login-list'>
            <li ref='loginSelected' className={(this.props.isLogin)?'user-login':''}
                onClick={this.handleLoginClick.bind(this)}>用户登录
            </li>
            <li ref='signInSelected' className={(this.props.isLogin)?'':'user-login'}
                onClick={this.handleSignInClick.bind(this)}>快速注册
            </li>
          </ul>
          <ul className='user-login-ul' id='user-login-ul'>
            <li className='user-login-li' id='user-login-li' style={{display: (this.props.isLogin) ? 'block' : 'none'}}>
        <span className='login_username'>
        <img src='images/login_images/user.png'/>
        <input type='text' ref='username' placeholder='用户名'/>
        </span>
              <span className='login_password'>
        <img src='images/login_images/mima.png'/>
        <input type='password' ref='password' placeholder='密码'/>
        </span>
              <div className='remeber_password'>
                <span className='remeber_password_span'><input type='checkbox' name='remeber_password'/> 记住密码 </span>
              </div>
              <span className='login_btn_span'>
        <button className='login_btn' onClick={this.handleClick.bind(this)}>登录</button>
    </span>
            </li>
            <li id='user-logup-li' style={{display: (this.props.isLogin) ? 'none' : 'block'}}>
        <span>
        <input type='text' placeholder='请输入用户名'/>
        <img src='images/login_images/user.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <input type='text' placeholder='请输入邮箱'/>
        <img src='images/login_images/mail.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <input type='password' placeholder='请输入密码'/>
        <img src='images/login_images/mima.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <input type='password' placeholder='重复密码'/>
        <img src='images/login_images/mima.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <button className='register_btn'>注册</button>
        </span>
            </li>
          </ul>
        </div>
    );
  }
}

export default MycTest;