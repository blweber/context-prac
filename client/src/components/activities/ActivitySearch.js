import React, { useContext } from "react";
import ActivityContext from "../../context/activities/ActivityContext";
import { Input, Button, Icon } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const ActivitySearch = () => {
	const activityContext = useContext(ActivityContext);

  const { filterActivities, clearFilteredActivities } = activityContext;

  const onChange = event => {
    let inputFiltering = event.target.value;
    if (inputFiltering !== "") {
      filterActivities(inputFiltering);
    } else {
      clearFilteredActivities();
    }
  };

  return (
    <Grid container spacing={3}>
			<Grid item xs={10}>
				<Icon>search</Icon>
				<Input
					type="text"
					placeholder="Search Activities"
					onChange={onChange}
				/>
			</Grid>
    </Grid>
  );
};

export default ActivitySearch;