import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "#1e88e5",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    padding: "0 30px"
  }
});

const ReusableButton = props => {
  const classes = useStyles();
  return <Button className={classes.root}>{props.children}</Button>;
};
export default ReusableButton;
