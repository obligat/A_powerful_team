import {connect} from "react-redux";
import ActivityDetail from "../components/ActivityDetail";
import {requestActivityDetail} from "../actions/activityDetail";

const mapStateToProps = state => {
  return {
    activityDetail: state.activityDetail
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    requestActivityDetail: (id) => {
      dispatch(requestActivityDetail(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetail);