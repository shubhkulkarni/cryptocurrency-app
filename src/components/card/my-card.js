import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginRight: "30px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: { float: "right" },
  heading: {
    float: "right",
    marginBottom: "30px"
  }
});
const MyCard = ({ title, heading, body, action }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className={classes.heading} variant="h4" component="h2">
          {heading}
        </Typography>{" "}
        <br />
        {/* <Typography className={classes.pos} color="textSecondary">
          {body}
        </Typography> */}
      </CardContent>

      <CardActions>
        <Button size="small">{action}</Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
