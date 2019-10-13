import React, { useReducer } from 'react';

import StatusContext from './StatusContext';
// import StatusReducer from './StatusReducer';

const StatusState = props => {

	const initialState = {
		workflows: [
			{
				workflow_id: 1,
				legal_authority: "333",
				statuses: [
					{
						name: "Draft",
						optional: true
					},
					{
						name: "Pending Reviewer Assignment",
						optional: true
					},
					{
						name: "Concept Submitted",
						optional: true
					},
					{
						name: "Draft Proposal",
						optional: true
					},
					{
						name: "Proposal Submitted",
						optional: true
					},
					{
						name: "Proposal 0-6 Approved",
						optional: true
					},
					{
						name: "Costs Approved",
						optional: true
					},
					{
						name: "Congress Approved",
						optional: true
					},
					{
						name: "Activity",
						optional: true
					},
					{
						name: "Activity Evaluation",
						optional: true
					},
				]
      },
      {
				workflow_id: 2,
				legal_authority: "345",
				statuses: [
					{
						name: "Draft",
						optional: true
					},
					{
						name: "Pending Approval",
						optional: true
					},
					{
						name: "Approved",
            optional: true
          }
				]
      },
      {
				workflow_id: 3,
				legal_authority: "AdHoc",
				statuses: [
					{
						name: "Draft",
						optional: false
					},
					{
						name: "Pending Approval",
						optional: true
					},
					{
						name: "Approved",
            optional: false
          }
				]
      }
    ]
  }
  
  // The dispatch function sends an action to the reducer 
  // which would implicitly change the current state
  const state = initialState;

	return (
    <StatusContext.Provider 
      value={{
        workflows: state.workflows
      }}
    >
      { props.children }
    </StatusContext.Provider>
	);
}

export default StatusState;