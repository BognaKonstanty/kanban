export const CREATE_LANE = 'CREATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const CREATE_LANES = 'CREATE_LANES';

import uuid from 'uuid';
import callApi from '../../util/apiCaller';
import { lanes } from '../../util/schema';
import { normalize } from 'normalizr';


export function createLane(lane) {
  return {
 	type: CREATE_LANE,
 	lane: {
 		id: uuid.v4(),
 		notes: lane.notes || [],
 		...lane
 	}
  };
};

export function deleteLane(id) {
	return {
		type: DELETE_LANE,
		id
	};
};

export function updateLane (updatedLane) {
	return {
		type: UPDATE_LANE,
		...updatedLane
	};
};

export function fetchLanes() {
  return (dispatch) => {
    return callApi('lanes').then(res => {
      const normalized = normalize(res.lanes, lanes);
      const { lanes, notes } = normalized.entities;

      dispatch(createLanes(lanes));
      dispatch(createNotes(notes));
    });
  };
}

export function createLanes(lanes) {
  return {
    type: CREATE_LANES,
    lanes
  };
};

