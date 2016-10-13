import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {reqAddActivity} from '../actions/newActivity';
import NewActivity from '../components/NewActivity';

const mapStateToProps = (state)=> {
  return {
    addNewActivityResult: state.addNewActivityResult
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    reqAddActivity: (activityName, activityTime, activityLocation, instruction)=> {
      dispatch(reqAddActivity(activityName, activityTime, activityLocation, instruction));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewActivity));
