import React, {Component} from 'react';

export default class ActivityDetail extends Component {

    componentDidMount() {
        let {id} = this.props.params;
        this.props.requestActivityDetail(id);
    }

    render() {
        const {activityName, activityTime, activityLocation, instruction}=this.props.activityDetail;
        return (
            <div>
                <div>
                    <div className="col-xs-4">
                        logo
                    </div>
                    <div className="col-xs-8">
                        <div>活动名称：{activityName}</div>
                        <div>举办社团：</div>
                        <div>举办时间：{activityTime}</div>
                        <div>举办地点：{activityLocation}</div>
                    </div>
                </div>
                <div>
                    活动简介：{instruction}
                </div>
                <div>
                    评论：
                    <textarea className="form-control" rows="3" style={{width: '700px'}}></textarea>
                    <button className="btn btn-info">回复</button>

                </div>
            </div>

        );
    }
}

