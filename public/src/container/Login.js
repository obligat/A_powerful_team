import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {checkUserExist, checkLoginValid} from '../actions/login';
import Login from '../components/Login';

const mapStateToProps = (state)=> {
  return {
    showLoginMessage: state.showLoginMessage
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    checkUserExist: (username)=> {
      dispatch(checkUserExist(username));
    },
    checkLoginValid: (username, password)=> {
      dispatch(checkLoginValid(username, password));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));