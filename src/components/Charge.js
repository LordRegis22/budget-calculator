import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Charge = props => {
  const useStyles = makeStyles({
    root: { color: "var(--mainGrey)", margin: "auto" }
  });
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.root}>
      {props.charge}
    </Typography>
  );
};

export default Charge;
