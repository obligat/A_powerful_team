import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reqUserInfo} from '../actions/showUserInfo';

class UserCenter extends Component {

  componentDidMount() {
    let {username}=this.props.params;
    this.props.reqUserInfo(username);
  }

  render() {
    const {username, communityName, schoolName, logo, description, email, tel}=this.props.showUserInfo;
    return (
        <div>
          <div>{communityName}</div>
          <div>{schoolName}</div>
          <div>
            <img src={'../'+logo} alt='community logo '/>
          </div>
          <div>{username}</div>
          <div>{email}</div>
          <div>{tel}</div>
          <div>{description}</div>
        </div>
    )
  }
}

const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch)=> {
  return {
    reqUserInfo: (username)=> {
      dispatch(reqUserInfo(username));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);

