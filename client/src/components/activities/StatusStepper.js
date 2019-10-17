import React, { useContext }from 'react';

import StatusContext from '../../context/status/StatusContext';
import ActivityContext from '../../context/activities/ActivityContext';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';

import './StatusStepper.scss';

const StatusStepper = (props) => {

  // Subscribe to activity and status state (consume)
  const activityContext = useContext(ActivityContext);
  const statusContext = useContext(StatusContext);
  
  const [page, setPage] = React.useState(0);
  // const [activeStatus, setActiveStatus] = React.useState(0);

  let statusArr =[];
  let optionArr = [];
  if(props.statuses) {
    statusArr = props.statuses.map(({ name }) => name);
    optionArr = props.statuses.map(({ optional }) => optional);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const handleActiveStatus = () => {
  //   // const activeStatus = statusArr.filter((s, index) => s.status == props.currentStatus);
  //   // console.log('filteredArr: ', filteredArr);
  //   // setActiveStatus(activeStatus);
  // }

  const activeStatus = statusArr.findIndex(status => status == props.currentStatus);

  return (
    <Grid>
      <Stepper activeStep={activeStatus}>
        {statusArr.map((label) => {
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