import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Kanban.css';

class Kanban extends Component {
  render() {
    return (
      <div>
        <h2>Kanban</h2>
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

Kanban.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
