import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import TableHead from "@material-ui/core/TableHead";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 135
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const SystemTable = () => {
  const classes = useStyles();
  function createData(name) {
    return { name };
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const rows = [
    createData("Administrator"),
    createData("View"),
    createData("Edit"),
    createData("Configure"),
    createData("No Access")
  ];

  return (
    <Paper>
      <div className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Role Name</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <form className={classes.root}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="system-role">{row.name}</InputLabel>
                      <Select>
                        <MenuItem>Ten</MenuItem>
                        <MenuItem>Thirty</MenuItem>
                        <MenuItem>Twenty</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
                </TableCell>
                <Grid container justify="flex-end">
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
                      <a href="/CreateSystemRole">Update</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/!#">Delete</a>
                    </MenuItem>
                  </Menu>
                </Grid>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default SystemTable;
