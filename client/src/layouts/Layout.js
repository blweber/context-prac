import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import '../styles/_colors.scss';
import './layout.scss';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "10vh",
  }
  // toolbar: theme.mixins.toolbar,
}));

const Layout = props => {
  const classes = useStyles();

  return (
        <Grid item xs={10} className={'main-content'}>
          <main className={classes.content}>
            <div className={classes.toolbar}>
              {props.children}
            </div>
          </main>
        </Grid>
  )
};

export default Layout;
