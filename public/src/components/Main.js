import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Activities from './Activities';
import {reqUserName} from '../actions/showUserInfo';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showType: this.props.activities
    };
  }

  componentDidMount() {
    this.props.reqUserName();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      showType:nextProps.activities
    });
  }

  handleClickCreate() {
    this.setState({
      showType: this.props.activities.filter((v, k)=>(v.creator === this.props.reqUserNameResult))
    });
  }

  handleClickJoin() {
    this.setState({
      showType: this.props.activities.filter((v, k)=>((v.participator).find(v=>v === this.props.reqUserNameResult)))
    });
  }

  render() {

    const username = this.props.reqUserNameResult;
    return (
        <div>
          <div className="col-xs-3">
            <div>
              <img src="images/logo.jpg" alt="iPet logo"></img>
            </div>
            <div>
              <Link to={'/userCenter/' + username}><button>个人中心</button></Link>
            </div>
            <div>
              <Link to="/newActivity"><button>新建活动</button></Link>
            </div>
            <div>
              <Link to="/main"><button>所有活动</button></Link>
            </div>
            <div>
              <a onClick={this.handleClickCreate.bind(this)}><button>我发布的活动</button></a>
            </div>
            <div>
              <a onClick={this.handleClickJoin.bind(this)}><button>我参加的活动</button></a>
            </div>
            <div>
              <Link to="/login"><button>退出</button></Link>
            </div>
          </div>
          <div className="row scrol">
            <Activities showType={this.state.showType}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
