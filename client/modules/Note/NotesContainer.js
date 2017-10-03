import {connect} from 'react-redux';
import Notes from './Notes';
import *as noteActions from './Note/noteActions';

const mapDispatchToProps = (dispatch) => {
	...noteActions
};

export default connect(null, mapDispatchToProps)(Notes);