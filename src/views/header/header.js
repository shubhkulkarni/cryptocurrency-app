import React from "react";
import Typography from "@material-ui/core/Typography";
import "./header.css";
const Header = () => {
  return (
    <Typography className="title" variant="h4" component="h2" gutterBottom>
      Cryptocurrency Rates
    </Typography>
  );
};

export default Header;
