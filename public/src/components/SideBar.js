import React, {Component} from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <div className="col-xs-3">
                <div>
                    <img src="images/logo.jpg" alt="iPet logo"></img>
                </div>
                <div>
                    <h4>新建活动</h4>
                </div>
                <div>
                    <h4>我发布的活动</h4>
                </div>
                <div>
                    <h4>我参加的活动</h4>
                </div>
                <div>
                    <h4>退出</h4>
                </div>
            </div>
        );
    }
}
