import React, { useContext, useState } from "react";
import axios from 'axios';

import PropTypes from 'prop-types';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import ActivityContext from "../../context/activities/ActivityContext";

import './activityTable.scss';


const ActivityTable = ({ activity }) => {
    // Subscribe to Activities state and access deleteActivity action
    const activityContext = useContext(ActivityContext);
    const { activities, deleteActivity } = activityContext;

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, seTableCellense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleRequestSort = (event, property) => {
      const isDesc = orderBy === property && order === 'desc';
      setOrder(isDesc ? 'asc' : 'desc');
      setOrderBy(property);
    };

    // Declare local state to be used internally by this component
    // const [ selectedActivity, setSelectedActivity ] = useState();

    // const onRemoveActivity = () => {
    //     deleteActivity(selectedActivity)
    //     setSelectedActivity(null); //clear selection
    // }

    // ENHANCED HEADERS

    const headCells = [
        { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
        { id: 'legal_auth', numeric: false, disablePadding: false, label: 'Legal Authority' },
        { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
        { id: 'wait_time', numeric: true, disablePadding: false, label: 'Wait Time)' },
        { id: 'partner_nation', numeric: false, disablePadding: false, label: 'Partner Nation' },
        { id: 'data_role', numeric: false, disablePadding: false, label: 'Role' },
        { id: 'action', numeric: false, disablePadding: false, label: 'Action' },
    ];

    function EnhancedTableHead(props) {
        const { classes, order, orderBy, onRequestSort } = props;
        const createSortHandler = property => event => {
          onRequestSort(event, property);
        };
      
        return (
          <TableHead>
            <TableRow>
              {headCells.map(headCell => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'default'}
                  sorTableCellirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={order}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={'visually-hidden'}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        );
    }
      
    EnhancedTableHead.propTypes = {
        classes: PropTypes.object.isRequired,
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };

    const rows = activities.map(activity => (
        <TableRow>
            <TableCell>{activity.id}</TableCell>
            <TableCell>{activity.activity_name}</TableCell>
            <TableCell>{activity.legal_authority}</TableCell>
            <TableCell>{activity.wait_time}</TableCell>
            <TableCell>{activity.partner_nation}</TableCell>
            <TableCell>{activity.data_role}</TableCell>
        </TableRow>
    ));


    return (
        <Grid>
            <Paper>
                <Table aria-labelledby="activitiesTable">
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                />
                <TableBody>
                    {rows}
                </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};
 
export default ActivityTable;