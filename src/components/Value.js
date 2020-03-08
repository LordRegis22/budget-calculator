import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";

const Value = props => {
  const useStyles = makeStyles({
    root: { textAlign: "center" },
    smallAmount: {
      fontSize: "1.5rem",
      color: "var(--mainRed)",
      margin: "auto"
    },
    largeAmount: {
      marginRight: ".5rem",
      color: "var(--mainRed)"
    },
    charge: { fontSize: "2rem", color: "blue" }
  });
  const classes = useStyles();
  return (
    <ListItemIcon>
      <>
        <FaDollarSign className={classes.smallAmount} />
        <Typography variant="h4" className={classes.largeAmount}>
          {props.value}
        </Typography>
      </>
    </ListItemIcon>
  );
};

export default Value;
