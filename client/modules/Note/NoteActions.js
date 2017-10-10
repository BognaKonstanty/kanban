export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

import uuid from 'uuid';

export function createNote(note) {
  return (dispatch) => {
    return callApi(`lanes/${laneId}/notes`, 'post', note).then(res => {
      dispatch({
        type: CREATE_NOTE,
        note: res
      });
    });
  };
};


export function deleteNote(id) {
  return dispatch => {
    return callApi(`lanes/${laneId}/notes/${noteId}`, 'delete').then(res => {
      dispatch({
        type: DELETE_NOTE,
        id
      })
    })
  }
}

export function updateNote(updatedNote) {
	return {
		type: UPDATE_NOTE,
		...updatedNote
	};
};


export function updateNote(note) {
  return dispatch => {
    return callApi(`lanes/${laneId}/notes/${note._id}`, 'put', note).then(res => {
      dispatch({
        type: UPDATE_NOTE,
        note
      })
    })
  }
}

export function createNotes(notes) {
  return {
    type: CREATE_NOTES,
    notes
  };
}
