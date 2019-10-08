import React from "react";
import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <Grid item xs={2}>
      <Drawer
        className={'drawer'}
        position="sticky"
        variant="permanent"
         classes={{
           paper: 'drawer-paper'
         }}
      >
        <List> 
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Dashboard</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Link to="/"><Typography>
                  Dashboard Details
          </Typography> </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>
  
            <ExpansionPanel>
            <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Activities</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Link to="/Activities"><Typography>
                    Activities Details
                    </Typography> </Link>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
            <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Workflows</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Workflows Details
            </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
 
            <ExpansionPanel>
            <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Geospatial</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Geospatial Details
            </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Configuration</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <Link to="/">User Management </Link>
                    <br/>
                    <Link to="/systemroles">Manage System Roles</Link>
            </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

        </List>

      </Drawer>
    </Grid>
  );
};

export default Sidebar;