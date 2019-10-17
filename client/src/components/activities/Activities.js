import React, { useContext } from "react";
import ActivityContext from "../../context/activities/ActivityContext";
import ActivityTable from "./ActivityTable";
import { Grid, Card, Fab } from "@material-ui/core";
import "./activities.scss";
import ReusableButton from "./../shared/ReusableButton";

const Activities = () => {
  const activityContext = useContext(ActivityContext);

	const { activities } = activityContext;
    
	return (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className={'grid-margin'}>
          <ReusableButton round="True" color="primary" style={{ float: "right" }}>
            Create New Activity
          </ReusableButton>
        </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={10}>
            <ActivityTable />
          </Grid>
          <Grid item xs={2}>
            <Card className={"nudge-card"}>Activity Name</Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Activities;
