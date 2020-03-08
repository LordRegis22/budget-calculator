import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import theme from "../theme.js";
import { FaDollarSign } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  cost: { margin: theme.spacing(1), width: "auto" },
  expense: { margin: theme.spacing(1), flexGrow: "1" },
  button: { display: "block", margin: theme.spacing(1) }
});

export const ExpenseForm = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="cost"
        name="cost"
        label="Cost"
        variant="outlined"
        className={classes.cost}
      />
      <TextField
        id="expense"
        name="expense"
        label="Expense"
        variant="outlined"
        className={classes.expense}
      />
      <Button
        variant="contained"
        color="secondary"
        fullWidth={true}
        className={classes.button}
      >
        <FaDollarSign style={{ marginRight: "10px" }} />
        Add Expense
      </Button>
    </form>
  );
};

export default ExpenseForm;
