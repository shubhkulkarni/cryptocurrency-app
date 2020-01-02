import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

const Loader = ({ isLoading }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isLoading ? <CircularProgress color="secondary" /> : null}
    </div>
  );
};

export default Loader;
