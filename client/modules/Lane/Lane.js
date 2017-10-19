import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Edit from '../../components/Edit';
import NotesContainer from '../Note/NotesContainer';

// Import Style
import styles from './Lane.css';

class Lane extends Component {
  render() {
    const {lane, laneNotes, ...props} =this.props;
    const laneId = lane.id;

    return (
      <div>
        <div className={styles.LaneHeader}>
          <button onClick={() => props.updateLane({id: laneId, editing: true, name: lane.name})}>Edit</button>
          <div className={styles.LaneAddNote}>
            <button onClick={props.createNote.bind(this, laneId)}>+</button>
          </div>
          <Edit className={styles.LaneName} editing={lane.editing}
            value={lane.name}
            onEdit={name => props.updateLane({id: laneId, name, editing: false})}
  />
          <div className={styles.LaneDelete}>
            <button onClick={props.deleteLane.bind(this, lane)}>x</button>
          </div>
        </div>
        <NotesContainer notes={lane.notes} />
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
  lane: PropTypes.object,
  laneNotes: PropTypes.array
};

/*export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);*/

export default Lane;
