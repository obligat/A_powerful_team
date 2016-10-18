import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Head extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '登陆',
      register: '注册'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reqUserNameResult) {
      this.setState({
        login: nextProps.reqUserNameResult,
        register: ''
      });
    } else {
      this.setState({
        login: '登陆',
        register: '注册'
      });
    }
  }

  render() {
    return (
        <div className="row head">
          <div className="col-xs-4 col-md-1">
            <div className="thumbnail">
              <img src="images/logo.jpg" alt="iPet logo"/>
            </div>
          </div>
          <div className="col-xs-8 ">
            <Link to="/main"><span>首页    </span></Link>
            <Link to="/login"><span>{this.state.login}   </span></Link>
            <Link to="/register"><span>{this.state.register}    </span></Link>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state=>state;
export default connect(mapStateToProps)(Head);
