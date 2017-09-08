import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Lane.css';

class Lane extends Component {
  render() {
    return (
      <div>
        <h2>Lane</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Lane.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
