import React, { useContext } from 'react';

import {
  List,
  ListItem,
  ListItemText,
  Popover,
  Checkbox,
} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

import StatusContext from '../../context/status/StatusContext';
import ActivityContext from '../../context/activities/ActivityContext';


const FilterPopover = (props) => {
  const activityContext = useContext(ActivityContext);
  const statusContext = useContext(StatusContext);
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const options = props.options;

  return (
    <Grid>
      <IconButton aria-label="delete" size="large" onClick={handleClick}>
          <FilterListIcon fontSize="inherit" />
      </IconButton>
      <Popover 
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
         {options.map(option => (
            <ListItem
              dense
              button
            >
              <Checkbox
                checked={option.checked}
                // tabIndex={-1}
                disableRipple
                // disabled={option.disabled}
              />
              <ListItemText primary={option} />
            </ListItem>
          ))}
      </Popover>
    </Grid>
  );

}

 
export default FilterPopover;