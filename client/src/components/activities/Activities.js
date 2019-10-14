import React, { useContext } from "react";

import ActivityContext from '../../context/activities/ActivityContext';
import ActivityTable from './ActivityTable';
import { Grid, Card, Fab } from "@material-ui/core";

import './activities.scss';

const Activities = () => {
	const activityContext = useContext(ActivityContext);

	const { activities } = activityContext;
    
	return (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className={'grid-margin'}>
          <Fab //TODO: Use Button component
            variant="extended"
            size="small"
            aria-label="save"
            className={'create-act-btn'}
            style={{width: '200px', float: 'right'}} //TODO: remove inline styling
            type="button"
          >
            Create New Activity
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={10}>
			        <ActivityTable/>
            </Grid>
            <Grid item xs={2}>
              <Card className={'nudge-card'}>Nudge Placeholder</Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
	);
}

export default Activities;