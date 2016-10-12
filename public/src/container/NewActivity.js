/**
 * Created by myc on 10/12/16.
 */
import {connect} from 'react-redux';
import {reqAddActivity} from '../actions/newActivity';
import NewActivity from '../components/NewActivity';

const mapStateToProps = (state)=> {
  return {
    addNewActivity: state.addNewActivity
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    reqAddActivity: (activityName, activityTime, activityLocation, instruction)=> {
      dispatch(reqAddActivity(activityName, activityTime, activityLocation, instruction));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity);
