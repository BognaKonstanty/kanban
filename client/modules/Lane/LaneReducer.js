// Import Actions
import { CREATE_LANE, CREATE_LANES, UPDATE_LANE, DELETE_LANE } from './LaneActions';
import _ from 'lodash';
// Initial State
const initialState = {};

const LaneReducer = (state = initialState, action) => {
  /*switch (action.type) {
  	case CREATE_LANE:
  		return [..state, action.lane];
  	case UPDATE_LANE:
  		return state.map((line) => {
  			if(line.id === action.id) {
  				return Object.assign({}, lane, action.updatedLane);
  			}
  			return lane;	
  		});
  	case DELETE_LANE:
  		return state.filter((lane) => lane.id !== action.id);	
    default:
      return state;
  }*/

  switch (action.type) {
    case CREATE_LANE:
      return { ...state, [action.lane.id]: action.lane };
    case CREATE_LANES:
      return { ...action.lanes }
    case UPDATE_LANE:
      return { ...state, [action.updatedLane.id]: action.updatedLane };
    case DELETE_LANE:
      return _.omit(state, action.id);
    default:
      return state;
  }
};

export default LaneReducer;

