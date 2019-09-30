import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav vertical>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><b>Dashboard</b></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Link to="/"><Typography>
                  Dashboard Details
          </Typography> </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><b>Activities</b></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Link to="/AdHoc"><Typography>
                  Activities Details
                  </Typography> </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><b>Workflows</b></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Workflows Details
          </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><b>Geospatial</b></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Geospatial Details
          </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><b>Configuration</b></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Link to="/">User Management </Link>
                  <Link to="/systemroles">Manage System Roles</Link>
          </Typography>
               
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
