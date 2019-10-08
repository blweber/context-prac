import React, { useContext } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ActivityContext from '../../context/activities/activityContext';

import ActivityTable from './ActivityTable';

const Activities = () => {
    const activityContext = useContext(ActivityContext);

    const { activities, filtered } = activityContext;

    if (activities.length === 0) {
        return <h4>Please add an Activity</h4>;
    }
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Title</StyledTableCell>
                            <StyledTableCell align="right">Legal Authority</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Wait Time</StyledTableCell>
                            <StyledTableCell align="right">Partner Nation</StyledTableCell>
                            <StyledTableCell align="right">Data Role</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activities.map(activity => <ActivityTable activity={activity} /> )}
                    </TableBody>
                </Table> 
            </Grid>
        </Grid>

    );


}
 
export default Activities;