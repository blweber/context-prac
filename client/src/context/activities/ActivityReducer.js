import { 
	ADD_ACTIVITY, 
	DELETE_ACTIVITY, 
	SET_CURRENT_ACTIVITY, 
	FILTER_ACTIVITIES, 
	CLEAR_FILTERED_ACTIVITIES
} from '../types';
  
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
			case FILTER_ACTIVITIES:
				return {
					...state,
					filtered: state.activities.filter(activity => {
						const regex = new RegExp(`${action.payload}`, "gi");
						return (
              activity.activity_name.match(regex) 
              || activity.legal_authority.match(regex)
              || activity.partner_nation.match(regex)
              || activity.data_role.match(regex)
              || activity.status.match(regex)
						);
					})
				};
			case CLEAR_FILTERED_ACTIVITIES:
				return {
					...state,
					filtered: null
				};
      default:
        return state;
    }
    
  };
  