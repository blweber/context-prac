import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Hidden from "@material-ui/core/Hidden";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <Grid item xs={2}>
      <Hidden mdDown implementation="css">
        <Drawer
          className={"drawer"}
          position="sticky"
          variant="permanent"
          classes={{
            paper: "drawer-paper"
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
                <a href="/">
                  <Typography>Dashboard Details</Typography>
                </a>
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
                <a href="/Activities">
                  <Typography>Activities Details</Typography>
                </a>
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
                <Typography>Workflows Details</Typography>
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
                <Typography>Geospatial Details</Typography>
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
                  <a href="/">
                    <Typography>User Management</Typography>
                  </a>
                  <br />
                  <a href="/systemroles">
                    <Typography>Manage System Roles</Typography>
                  </a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </List>
        </Drawer>
      </Hidden>
    </Grid>
  );
};

export default Sidebar;
