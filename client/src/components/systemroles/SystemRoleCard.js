import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  }
}));

const SystemRoleCard = props => {
  return (
    <Card className="card">
      <CardHeader title={props.title} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          accusantium!
        </Typography>
        <IconButton aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default SystemRoleCard;
