import React, { useContext } from "react";

import Fab from '@material-ui/core/Fab';

import ActivityContext from '../../context/activities/ActivityContext';
import ActivityTable from './ActivityTable';

const Activities = () => {
	const activityContext = useContext(ActivityContext);

	const { activities } = activityContext;
    
	return (
		<div>
			<Fab //TODO: Use Button component
				variant="extended"
				size="small"
				aria-label="save"
				className={'add-user-btn'}
				style={{width: '200px', float: 'right'}} //TODO: remove inline styling
				type="button"
			>
				Create New Activity
			</Fab>
				
			<ActivityTable/>
		</div>
	);
}

export default Activities;