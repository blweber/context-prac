import React, { useContext }from 'react';

import StatusContext from '../../context/status/StatusContext';
import ActivityContext from '../../context/activities/ActivityContext';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Grid from '@material-ui/core/Grid';

const StatusStepper = (props) => {

  // Subscribe to activity and status state (consume)
  const activityContext = useContext(ActivityContext);
  const statusContext = useContext(StatusContext);
  
let statusArr =[];
let optionArr = [];
  if(props.statuses) {
    statusArr = props.statuses.map(({ name }) => name);
    optionArr = props.statuses.map(({ optional }) => optional);
  }
  console.log('name', statusArr);

  return (
    <Grid>
      <Stepper>
        {statusArr.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Grid>
  );
};
 
export default StatusStepper;