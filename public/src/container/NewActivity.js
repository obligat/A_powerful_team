import {connect} from "react-redux";
import {withRouter} from "react-router";
import {reqAddActivity} from "../actions/newActivity";
import NewActivity from "../components/NewActivity";

const mapStateToProps = (state)=> {
  return {
    addNewActivity: state.addNewActivity
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    reqAddActivity: (username, activityName, activityTime, activityLocation, instruction)=> {
      dispatch(reqAddActivity(username, activityName, activityTime, activityLocation, instruction));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewActivity));
