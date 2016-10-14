import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {reqUserInfo, reqUserName} from '../actions/showUserInfo';

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: ''
    };
  }

  componentDidMount() {
    this.props.reqUserName();
  }

  componentWillReceiveProps(nextProps) {
    let username = nextProps.reqUserNameResult;
    this.setState({
      userInfo: username
    });
  }

  render() {

    const username = this.props.reqUserNameResult;
    return (
        <div className="col-xs-3">
          <div>
            <img src="images/logo.jpg" alt="iPet logo"></img>
          </div>
          <div>
            <Link to={'/userCenter/' + username}><span>个人中心：{this.state.userInfo}</span></Link>
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

const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch)=> {
  return {
    reqUserName: ()=> {
      dispatch(reqUserName());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);