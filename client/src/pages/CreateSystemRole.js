import React from "react";
import SystemRoleName from "./../components/systemroles/SystemRoleName";
import SystemRoleCard from "./../components/systemroles/SystemRoleCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SystemFilter from "../components/systemroles/SystemFilter";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const CreateSystemRole = () => {
  const classes = useStyles();

  return (
    <div>
      <SystemFilter href={"/systemroles"} />
      <SystemRoleName />

      <br />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SystemRoleCard title={"User Management"} />
          <br />
          <SystemRoleCard title={"Data Management"} />
        </Grid>
        <Grid item xs={6}>
          <SystemRoleCard title={"Role Management"} />
          <br />
          <SystemRoleCard title={"Rule Management"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateSystemRole;
