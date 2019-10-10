import React, { useContext, useState } from "react";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import IconButton from '@material-ui/core/IconButton';

import ActivityContext from "../../context/activities/ActivityContext";
import ActivitySearch from "./ActivitySearch";

import './activityTable.scss';

const ActivityTable = ({ activity }) => {
	// Subscribe to Activities state and access deleteActivity action
	const activityContext = useContext(ActivityContext);
	const { activities, filtered } = activityContext;
	
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState(activities.legal_authority); 

	// Create new array with table row data, all or filtered
	let rowsArr;
	if(filtered) {
		rowsArr = filtered.map(
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation }) => 
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation })
		);
	}else {
		rowsArr = activities.map(
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation }) => 
			({ activity_name, legal_authority, data_role, status, wait_time, partner_nation })
		);
	}

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

	// Declare local state to be used internally by this component
	// const [ selectedActivity, setSelectedActivity ] = useState();

	// const onRemoveActivity = () => {
	//     deleteActivity(selectedActivity)
	//     setSelectedActivity(null); //clear selection
	// }

	//***ENHANCED HEADERS***//

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

	//***TABLE BODY***//

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
	
	return (
		<Grid>
			<Paper>
				<h5 className={'act-header font-medium'}>Activities</h5>
				<div><ActivitySearch/></div>
		
				<Table aria-labelledby="activitiesTable">
					<EnhancedTableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
						rowCount={rowsArr.length}
						className={'act-filter'}
					/>
					<TableBody>
						{stableSort(rowsArr, getSorting(order, orderBy))
							.map((row) => {
								if(row.wait_time > 7) { 
									var wtColor = 'wt-red'; 
								} else if (row.wait_time > 5 && row.wait_time < 8) {
									var wtColor = 'wt-orange'; 
								}
								return (
									<TableRow hover className={`MuiTableRow-root ${wtColor}`}>
										<TableCell>{row.activity_name}</TableCell>
										<TableCell>{row.legal_authority}</TableCell>
										<TableCell>{row.status}</TableCell>
										<TableCell>{row.wait_time}</TableCell>
										<TableCell>{row.partner_nation}</TableCell>
										<TableCell>{row.data_role}</TableCell>
										<ActivityActions/>
									</TableRow>
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