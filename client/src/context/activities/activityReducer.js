import { ADD_ACTIVITY, DELETE_ACTIVITY, SET_CURRENT_ACTIVITY } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case ADD_ACTIVITY:
        return {
          ...state,
          activities: [...state.activities, action.payload]
        };
      case DELETE_ACTIVITY:
        return {
          ...state,
          activities: state.activities.filter(
            activity => activity.id !== action.payload
          )
        };
      case SET_CURRENT_ACTIVITY:
        return {
          ...state,
          current: action.payload
        };
      default:
        return state;
    }
  };
  