import {
    ADD_ACTIVITY,
    DELETE_ACTIVITY,
    SET_CURRENT_ACTIVITY,
    CLEAR_CURRENT_ACTIVITY,
    UPDATE_ACTIVITY,
    FILTER_ACTIVITY,
    CLEAR_FILTER_ACTIVITY
  } from "../types";
  
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
      case CLEAR_CURRENT_ACTIVITY:
        return {
          ...state,
          current: null
        };
      case UPDATE_ACTIVITY:
        return {
          ...state,
          activities: state.activities.map(activity =>
            activity.id === action.payload.id ? action.payload : activity
          )
        };
      case FILTER_ACTIVITY:
        return {
          ...state,
          filtered: state.activities.filter(activity => {
            const regex = new RegExp(`${action.payload}`, "gi");
            return (
              activity.activity_name.match(regex)
            );
          })
        };
      case CLEAR_FILTER_ACTIVITY:
        return {
          ...state,
          filtered: null
        };
      default:
        return state;
    }
  };
  