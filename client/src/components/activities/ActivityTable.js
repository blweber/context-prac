import React, { useContext, Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ActivitySearch from "./ActivitySearch";
import StatusStepper from './StatusStepper';
import FilterPopOver from "./FilterPopover";

import ActivityContext from "../../context/activities/ActivityContext";
import StatusContext from '../../context/status/StatusContext';

import './activityTable.scss';

const ActivityTable = ({ activity }) => {
	// Subscribe to Activities state
	const activityContext = useContext(ActivityContext);
	const { activities, filtered } = activityContext;
	
	const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(activities.wait_time);
  const [filteredActivities, setFilteredActivities] = React.useState();

  // Pull unique legal authorities from global state
  const uniqueLegalAuth = [...new Set(activities.map(item => item.legal_authority))];

	// Create new array with table row data, all or filtered
	let rowsArr;
	if(filteredActivities) {
		rowsArr = filteredActivities.map(
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation }) => 
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation })
		);
	}else if(filtered){
    rowsArr = filtered.map(
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation }) => 
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation })
		);
  } else{
		rowsArr = activities.map(
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation }) => 
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation })
		);
  }

  //**********************//
  //****COLUMN SORTING****//
  //**********************//

	function desc(a, b, orderBy) {
		if (b[orderBy] < a[orderBy]) {
			return -1;
		}
		if (b[orderBy] > a[orderBy]) {
			return 1;
		}
		return 0;
	}

	function stableSort(array, cmp) {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
				const order = cmp(a[0], b[0]);
				if (order !== 0) return order;
				return a[1] - b[1];
		});
		return stabilizedThis.map(el => el[0]);
	}
	
	function getSorting(order, orderBy) {
		return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
	}

	const handleRequestSort = (event, property) => {
		const isDesc = orderBy === property && order === 'desc';
		setOrder(isDesc ? 'asc' : 'desc');
		setOrderBy(property);
	}

  //***********************//
	//***ENHANCED HEADERS***//
  //**********************//

	const headCells = [
			{ id: 'activity_name', numeric: false, disablePadding: true, label: 'Title' },
			{ id: 'legal_authority', numeric: false, disablePadding: false, label: 'Legal Authority' },
			{ id: 'status', numeric: false, disablePadding: false, label: 'Status' },
			{ id: 'wait_time', numeric: true, disablePadding: false, label: 'Wait Time' },
			{ id: 'partner_nation', numeric: false, disablePadding: false, label: 'Partner Nation' },
			{ id: 'data_role', numeric: false, disablePadding: false, label: 'Role' },
			{ id: 'action', numeric: false, disablePadding: false, label: 'Action' },
	];

	function EnhancedTableHead(props) {
			const { order, orderBy, onRequestSort } = props;
			const createSortHandler = property => event => {
					onRequestSort(event, property);
			};
		
			return (
				<TableHead>
					<TableRow className={'table-row'}>
						{headCells.map(headCell => (
							<TableCell
								key={headCell.id}
								align={'left'}
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
											{order === 'desc' ? '' : ''}
										</span>
									) : null}
								</TableSortLabel>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
			);
  }
  
  //***********************//
  //********ACTIONS*******//
  //***********************//

	function ActivityActions(props) {
		const [anchorEl, setAnchorEl] = React.useState(null);

		const handleClick = event => {
			setAnchorEl(event.currentTarget);
		};

		const handleClose = () => {
      setAnchorEl(null);
		};

		return(
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
					<MenuItem>
						Access Activity
					</MenuItem>
					<MenuItem>
						Archive Activity
					</MenuItem>
				</Menu>
			</Grid>
		);
  }

  //***********************//
  //*****COLLAPSE COMP****//
  //***********************//

  const [expandIndex, setExpandIndex] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  function expandRow(row, index) {
    if(!isExpanded || expandIndex != index){
      setExpandIndex(index);
      setIsExpanded(true);
    }else {
      setExpandIndex(null);
      setIsExpanded(false);
    }
    return expandIndex;
  }
  
  //STATUSES
  const statusContext = useContext(StatusContext);
  const { workflows } = statusContext

  let newRowsArr;
  if(workflows){
    const arrInfoMap = new Map(workflows.map(o => [o.legal_authority, o]))
    newRowsArr = rowsArr.map(o => ({ ...o, ...arrInfoMap.get(o.legal_authority) }))
  }

  //***********************//
  //********FILTERS*******//
  //***********************//

  function handleSelectFilter(option) {
    let filteredArr = newRowsArr.filter(activity => activity.legal_authority == option);
    // console.log('filteredArr: ', filteredArr);
    setFilteredActivities(filteredArr);
  }

  
	return (
    <Grid item xs={12}>
			<Paper className={'act-paper'}>
				<h5 className={'act-header font-medium'}>Activities</h5>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1}>
				        <FilterPopOver 
                  options={uniqueLegalAuth}
                  onFilterSelect={handleSelectFilter}
                />
              </Grid>
              <Grid item xs={9}>
                <ActivitySearch />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
				<Table aria-labelledby="activitiesTable">
					<EnhancedTableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
						rowCount={rowsArr.length}
						className={'act-filter'}
					/>
					<TableBody>
						{stableSort(newRowsArr, getSorting(order, orderBy))
							.map((row, index) => {
								if(row.wait_time > 7) { 
									var wtColor = 'wt-red'; 
								} else if (row.wait_time > 5 && row.wait_time < 8) {
									var wtColor = 'wt-orange'; 
                }
								return (
                  <Fragment>
                    <TableRow 
                      hover  
                      className={`MuiTableRow-root ${wtColor}`}
                      style={{ cursor: "pointer"}}
                    >
                      <TableCell onClick={() => expandRow(row, index)}>{row.activity_name}</TableCell>
                      <TableCell onClick={() => expandRow(row, index)}>{row.legal_authority}</TableCell>
                      <TableCell onClick={() => expandRow(row, index)}>{row.status}</TableCell>
                      <TableCell onClick={() => expandRow(row, index)}>{row.wait_time}</TableCell>
                      <TableCell onClick={() => expandRow(row, index)}>{row.partner_nation}</TableCell>
                      <TableCell onClick={() => expandRow(row, index)}>{row.data_role}</TableCell>
                      <ActivityActions/>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                        <Collapse
                          in={expandIndex === index}
                          timeout="auto"
                          unmountOnExit
                        >
                          <StatusStepper
                            legalAuthority={row.legal_authority}
                            currentStatus={row.status}
                            statuses={row.statuses}
                          />
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </Fragment>
								);
							})
						}
					</TableBody>
				</Table>
			</Paper>
    </Grid>
	);
};
 
export default ActivityTable;