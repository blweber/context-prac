import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const SystemRoleCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card">
      <CardHeader title={props.title} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          accusantium!
        </Typography>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.title}</Typography>
          <Typography paragraph>
            <h5>View User</h5>
          </Typography>
          <Typography paragraph>
            <h5>Add User</h5>
          </Typography>
          <Typography paragraph>
            <h5>Edit/Remove User</h5>
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            ut.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SystemRoleCard;
