import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./navBar.scss";
import Breadcrumb from "./../components/shared/breadcrumbs/Breadcrumbs";

const items = [
  { to: "/", label: "User management" },
  { to: "/AdHoc", label: "Dashboard" },
  { to: "/systemroles", label: "System Roles" },
  { to: "/ContactForm", label: "Contact Form" },
  { to: "/CreateSystemRole", label: "Create System Role" }
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
              <Breadcrumb>
                {items.map(({ to, label }) => (
                  <Link key={to} to={to}>
                    {label}
                  </Link>
                ))}
              </Breadcrumb>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
