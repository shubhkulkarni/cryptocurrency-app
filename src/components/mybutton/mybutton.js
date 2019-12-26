import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    width: "100%",
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
}));

const Mybutton = ({ name }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} variant="contained">
      {name}
    </Button>
  );
};

export default Mybutton;
