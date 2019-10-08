import React, { useContext, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import ActivityContext from "../../context/activities/activityContext";
// import axios from 'axios';


const ActivityTable = ({ activity }) => {
    const activityContext = useContext(ActivityContext);

    const { deleteActivity, updateActivity, clearCurrentActivity, setCurrentActivity } = activityContext;

    const { id, activity_name, legal_authority, status, wait_time, partner_nation, data_role } = activity;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };
  
    const onDelete = () => {
        deleteActivity(id);
        clearCurrentActivity();
    };
  
    const onUpdate = () => {
        setCurrentActivity(activity);
    };
    
    // const fetchAllActivities = () => {
    //     return fetchAllActivitiesAsync()
    //       .then((response) => {
    //         console.log(response.data);
    //       })
    //       .catch((error) => {
    //         console.log('Error: ', error);
    //       });
    //   };
    
    // async function fetchAllActivitiesAsync() {
    //   try {
    //     const response = await axios.get(`http://localhost:5000/activities`);
    //     const body = await response;
    //     return body;
    //   } catch (error) {
    //     return error;
    //   }
    // }

    // console.log('ACTIVITY DATA ', fetchAllActivities());
    // console.log('ACTIVITY ',  activity);
    return (
        <tr>
        <td>{id}</td>
        <td>{activity_name}</td>
        <td>{legal_authority}</td>
        <td>{status}</td>
        <td>{wait_time}</td>
        <td>{partner_nation}</td>
        <td>{data_role}</td>
        <Grid container justify="center">
            <IconButton
                onClick={handleClick}
                className={"icon-button"}
                aria-controls="action-menu"
                aria-haspopup="true"
            >
            <MoreVertIcon />
            </IconButton>
            <Menu
                id="action-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Disable</MenuItem>
            <MenuItem>
                <Link to="/Activities">
                    Update
                </Link>
            </MenuItem>
            <MenuItem>
                <Link onClick={onDelete}>Delete</Link>
            </MenuItem>
            </Menu>
        </Grid>
        </tr>
    );
}
 
export default ActivityTable;