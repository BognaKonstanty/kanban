export const CREATE_LANE = 'CREATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';

import uuid from 'uuid';


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