import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./navBar.scss";

const items = [
  { to: "/", exact: true, label: () => <h6>User Management</h6> },
  { to: "/Activities", exact: true, label: () => <h6>Activities</h6> },
  { to: "/systemroles", exact: true, label: () => <h6>System Roles</h6> },
  {
    to: "/ContactForm",
    exact: true,
    label: () => (
      <div>
        {" "}
        <a href="/">User Management</a> / <a href="/ContactForm">Add User </a>{" "}
      </div>
    )
  },
  {
    to: "/CreateSystemRole",
    exact: true,
    label: () => (
      <div>
        {" "}
        <a href="/systemroles">System Roles</a> /{" "}
        <a href="/CreateSystemRole">Create System Role </a>{" "}
      </div>
    )
  }
];

//TODO:
//** add  breadcrumbs
//** fix logo border-right

const NavBar = () => {
  return (
    <Grid item xs={12}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justify="center">
            <Grid item xs={2} className={"logo-border"}>
              <Typography variant="h6" className="socium-logo">
                SOCIUM
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Router>
                {items.map(item => (
                  <Route
                    Key={item.to}
                    path={item.to}
                    exact={item.exact}
                    component={item.label}
                  />
                ))}
              </Router>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
