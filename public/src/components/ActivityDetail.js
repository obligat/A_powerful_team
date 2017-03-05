import React, {Component} from "react";
import {connect} from "react-redux";
import {reqJoinActivity} from "../actions/joinActivity";
import {reqUserName} from "../actions/showUserInfo";
import {reqAddComment} from "../actions/addUserComment";
import {Link} from "react-router";


class ActivityDetail extends Component {

  componentDidMount() {
    let {id} = this.props.params;
    this.props.requestActivityDetail(id);
    this.props.reqUserName();
  }

  handleClick() {
    let {id} = this.props.params;
    let username = this.props.reqUserNameResult;
    this.props.reqJoinActivity(id, username);
  }

  handleUserComment() {
    let {id} = this.props.params;
    let username = this.props.reqUserNameResult;
    let userComment = this.refs.userComment.value;
    if (userComment === '') {
      alert(' 你的输入为空!!!')
    } else {
      this.props.reqAddComment(id, username, userComment);
    }
  }

  render() {
    const {creator, activityName, activityTime, activityLocation, instruction, participator}=this.props.activityDetail;
    let {comment=[]}=this.props.activityDetail;
    return (
        <div className="container-fluid activityDetail">
          <div className="row">
            <div className="col-md-3"></div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4"><span>活动名称：</span></div>
                <div className="col-md-7">{activityName}</div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4"><span>举办者：</span></div>
                <div className="col-md-7">
                  <Link to={'/userCenter/'+creator}>{creator}</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4"><span>举办时间：</span></div>
                <div className="col-md-7">{activityTime}</div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4"><span>举办地点：</span></div>
                <div className="col-md-7">{activityLocation}</div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4"><span>活动简介：</span></div>
                <div className="col-md-7">{instruction}</div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4"><span>参加者：</span></div>
                <div className="col-md-7 participate">
                  {
                    (participator) ?
                        participator.map((v, k)=> {
                          return (
                              <div key={k}>{v}</div>
                          );
                        }) : ''
                  }</div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <button className="btn-default form-control" onClick={this.handleClick.bind(this)}>参加此活动</button>
                  <p>{this.props.joinResult}</p>
                </div>
                <div className="col-md-3"></div>
              </div>
              <br/><br/>

              <div className="row">
                <div className="col-md-12">
                  <span>评论：</span>

                  <div id="CommentBox">

                    <div id="CommentList">
                      {<div id="Comment">
                        {
                          comment.map((v, k)=> {
                            let arr = v.split(":");
                            let user = arr[0];
                            let mes = arr[1];
                            return (
                                <div key={k}><p>{user + ':'}</p><p>{mes}</p></div>
                            )
                          })
                        }
                      </div>}
                    </div>

                    <div id="CommentForm">
                      <div>
                           <textarea className="form-control"
                                     rows="3"
                                     style={{width: '700px'}}
                                     ref='userComment'>
                           </textarea>

                      </div>
                    </div>

                  </div>

                  <div className="col-md-10"></div>
                  <div className="col-md-2">
                    <button className="btn-default form-control"
                            onClick={this.handleUserComment.bind(this)}>回复
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <button onClick={this.handleClick.bind(this)}>参加此活动</button>
          </div>

          <div className="col-xs-8">
            活动简介：{instruction}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state)=>state;
const mapDispatchToProps = (dispatch)=> {
  return {
    reqJoinActivity: (id, username)=> {
      dispatch(reqJoinActivity(id, username));
    },
    reqUserName: ()=> {
      dispatch(reqUserName());
    },
    reqAddComment: (id, username, userComment)=> {
      dispatch(reqAddComment(id, username, userComment));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetail);


