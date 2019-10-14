import React, { useReducer } from 'react';
import ActivityContext from './ActivityContext';
import ActivityReducer from './ActivityReducer';
import uuid from "uuid";
import { 
    ADD_ACTIVITY, 
    DELETE_ACTIVITY, 
    SET_CURRENT_ACTIVITY,
    FILTER_ACTIVITIES,
    CLEAR_FILTERED_ACTIVITIES,
} from '../types';

const ActivityState = props => {

    const initialState = {
        activities: [
            {
                id: 1,
                activity_description: "Conduct combined firefighting operations",
                activity_name: "Amazon",
                legal_authority: "333",
                objectives: [
                    1,
                    2,
                    3
                ],
                partner_nation: "Brazil",
                phase: 3,
                socium_tracking_number: "SO-1900",
                status: "Draft",
                wait_time: 1,
                data_role: "Originator",
            },
            {
                id: 2,
                activity_description: "Conduct combined armor training",
                activity_name: "Das Tank",
                legal_authority: "333",
                objectives: [
                    1
                ],
                partner_nation: "Germany",
                phase: 5,
                socium_tracking_number: "EU-1901",
                status: "Draft",
                wait_time: 2,
                data_role: "Originator",
            },
            {
                id: 3,
                activity_description: "Develop Italy's ability to conduct maintenance operations",
                activity_name: "Fiat",
                legal_authority: "AdHoc",
                objectives: [
                    3,
                    6,
                    8
                ],
                partner_nation: "Italy",
                phase: 4,
                socium_tracking_number: "EU-1902",
                status: "Approved",
                wait_time: 3,
                data_role: "Originator",
            },
            {
                id: 4,
                activity_description: "Conduct combined exercise between Australian/US Marines",
                activity_name: "Kangaroo",
                legal_authority: "333",
                objectives: [
                    4,
                    6,
                    8
                ],
                partner_nation: "Australia",
                phase: 7,
                socium_tracking_number: "IN-1900",
                status: "Pending Reviewer Assignment",
                wait_time: 4,
                data_role: "Originator",
            },
            {
                id: 5,
                activity_description: "Combined anti-IED education",
                activity_name: "Home",
                legal_authority: "333",
                objectives: [
                    4
                ],
                partner_nation: "Nigeria",
                phase: 6,
                socium_tracking_number: "AF-1900",
                status: "Congress Approved",
                wait_time: 5,
                data_role: "Originator",
            },
            {
                id: 6,
                activity_description: "Developing French homeland security capability",
                activity_name: "Fromage",
                legal_authority: "333",
                objectives: [
                    9,
                    10
                ],
                partner_nation: "France",
                phase: 2,
                socium_tracking_number: "EU-1903",
                status: "Concept Submitted",
                wait_time: 6,
                data_role: "Originator",
            },
            {
                id: 7,
                activity_description: "Train Peruvian special operations forces at U.S. Special Ops University",
                activity_name: "Peru",
                legal_authority: "345",
                objectives: null,
                partner_nation: "Peru",
                phase: 1,
                socium_tracking_number: "SO-1901",
                status: "Draft",
                wait_time: 7,
                data_role: "Originator",
            },
            {
                id: 8,
                activity_description: "Send MTT to Cairo for Egyptian army officers",
                activity_name: "Pyramids",
                legal_authority: "345",
                objectives: [
                    1,
                    5
                ],
                partner_nation: "Egypt",
                phase: 5,
                socium_tracking_number: "CE-1900",
                status: "Draft",
                wait_time: 8,
                data_role: "Originator",
            },
            {
                id: 9,
                activity_description: "Bring Canadian naval officers to NCR to train for upcoming counter-terrorism deployment",
                activity_name: "Trudeau",
                legal_authority: "345",
                objectives: [
                    9,
                    6,
                    8
                ],
                partner_nation: "Canada",
                phase: 9,
                socium_tracking_number: "NO-1900",
                status: "Pending Approval",
                wait_time: 9,
                data_role: "Originator",
            },
            {
                id: 10,
                activity_description: "Send MTT to Tokyo for Japan SDF training.",
                activity_name: "Ramen",
                legal_authority: "345",
                objectives: [
                    2,
                    5,
                    8
                ],
                partner_nation: "Japan",
                phase: 2,
                socium_tracking_number: "IN-1901",
                status: "Draft",
                wait_time: 10,
                data_role: "Originator",
            }
        ],
				current: null,
				filtered: null,
    };

    // The dispatch function sends an action to the reducer 
    // which would implicitly change the current state
    const [state, dispatch] = useReducer(ActivityReducer, initialState);

    //Custom hooks that contain state, dispatcher, and actions
    const addActivity = (activity) => {
        activity.id = uuid.v4();
        dispatch({ type: ADD_ACTIVITY, payload: activity });
    };

    const deleteActivity = id => {
        dispatch({ type: DELETE_ACTIVITY, payload: id });
    };
    
    const setCurrentActivity = activity => {
        dispatch({ type: SET_CURRENT_ACTIVITY, payload: activity });
    };
    const filterActivities = text => {
        dispatch({ type: FILTER_ACTIVITIES, payload: text });
    };
    const clearFilteredActivities = () => {
        dispatch({ type: CLEAR_FILTERED_ACTIVITIES });
    };

    return ( 
			<ActivityContext.Provider 
				value={{
					activities: state.activities,
					current: state.current,
					filtered: state.filtered,
					addActivity, 
					deleteActivity,
					setCurrentActivity,
					filterActivities,
					clearFilteredActivities
				}}
			>
				{ props.children }
			</ActivityContext.Provider>
    );
}
 
export default ActivityState;