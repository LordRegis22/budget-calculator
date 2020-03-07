import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FaDollarSign } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

export const ExpenseItem = ({ expense: { id, charge, amount } }) => {
  const useStyles = makeStyles({
    root: { textAlign: "center" },
    smallAmount: { fontSize: "1.5rem", color: "blue" },
    largeAmount: { fontSize: "2rem", marginRight: ".5rem" },
    charge: { fontSize: "3rem", color: "blue" }
  });
  const classes = useStyles();
  return (
    <ListItem id={id}>
      <ListItemIcon>
        <FaDollarSign className={classes.smallAmount} />
        <span className={classes.largeAmount}>{amount}</span>
      </ListItemIcon>
      <ListItemText primary={charge} className={classes.root} />
    </ListItem>
  );
};

export default ExpenseItem;
