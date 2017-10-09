import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lanes from '../Lane/Lanes';
import { createLane } from '../Lane/LaneActions';

// Import Style
import styles from './Kanban.css';

class Kanban extends React.Component {
  render() {
    const {lanes, createLane}= this.props;

    return (
      <div>
        <button className="add-lane"
        onClick={() => createLane({
          name: 'New lane'
        })}
        >Add lane</button>
        <Lanes lanes={lanes}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lanes: state.lanes
});

const mapDispatchToProps = (dispatch) => ({
  createLane
});

Kanban.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
