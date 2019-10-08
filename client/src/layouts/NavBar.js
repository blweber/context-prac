import React from "react";
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './navBar.scss';
// import Breadcrumbs from "../components/shared/Breadcrumbs";

//TODO: 
//** add  breadcrumbs
//** fix logo border-right

const NavBar = () => {
  return (
    <Grid item xs={12}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justify='center'>
            <Grid item xs={2} className={'logo-border'}>
              <Typography variant="h6" className="socium-logo">
                SOCIUM
              </Typography>
            </Grid>
            <Grid item xs={10}>
              BREADCRUMBS HERE
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  )
};

export default NavBar;