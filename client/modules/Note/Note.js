import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Note.css';

/*class Note extends Component {
  render() {
    return (
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
*/

const= Note = props =>
	<li className={styles.Note} {...props}>{props.children}</li>;

Note.propTypes = {
	children: PropTypes.any,
};

//export default connect(
  //mapStateToProps,
  //mapDispatchToProps
//)(Note);

export default Note;
