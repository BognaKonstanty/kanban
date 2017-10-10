import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createLane, fetchLanes } from '../Lane/LaneActions';

import Lanes from '../Lane/Lanes';

// Import Style


class Kanban extends Component {
  componentDidMount() {
    this.props.fetchLanes();
  }

  render() {
    const { lanes, notes, createLane } = this.props;

    return (
      <div>
        <button 
          
          onClick={() => this.props.createLane({
            name: `New Lane`
          })}
        >
          Add lane
        </button>
        <Lanes lanes={lanes} notes={notes}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lanes: state.lanes
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  createLane: lane => {
    dispatch(createLane(lane))
  },
  fetchLanes: () => {
    dispatch(fetchLanes())
  }
});

Kanban.propTypes = {
  lanes: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);