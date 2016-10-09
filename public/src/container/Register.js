import {connect} from 'react-redux';
import {reqAddUser} from '../actions/register';
import Register from '../components/Register';

const mapStateToProps = (state)=> {
    return {
        showRegisterMessage: state.showRegisterMessage
    };
};

const mapDispatchToProps = (dispatch)=> {
    return {
        reqAddUser: (username, password)=> {
            dispatch(reqAddUser(username, password));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
