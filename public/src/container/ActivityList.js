import {connect} from 'react-redux';
import Activities from '../components/Activities';


const mapStateToProps = (state)=> (state);

const ActivityList = connect(mapStateToProps)(Activities);

export default ActivityList;
