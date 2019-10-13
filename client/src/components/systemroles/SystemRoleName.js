import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const SystemRoleName = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          System Role Name
        </Typography>
      </CardContent>
      <TextField
        id="standard-search"
        label="New Role Name"
        type="search"
        className={classes.pos}
        margin="none"
        justify="center"
      />
    </Card>
  );
};

export default SystemRoleName;
