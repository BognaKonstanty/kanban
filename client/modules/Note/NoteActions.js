export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';

import uuid from 'uuid';

import callApi from '../../util/apiCaller';

export function createNote(note) {
  return (dispatch) => {
    return callApi(`lanes/${note}/notes`, 'post', {"task": 'test'}).then(res => {
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
