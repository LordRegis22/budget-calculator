import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import theme from "../theme.js";
import { FaDollarSign } from "react-icons/fa";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  cost: { margin: theme.spacing(1), width: "100%" },
  expense: { margin: theme.spacing(1), flexGrow: "1" },
  button: { display: "block", margin: theme.spacing(1) }
});

export const ExpenseForm = ({
  handleCharge,
  handleAmount,
  handleSubmit,
  amount,
  charge
}) => {
  const classes = useStyles();
  return (
    <form
      className={classes.root}
      validate="true"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="cost"
        name="cost"
        label="Cost"
        variant="outlined"
        type="number"
        className={classes.cost}
        value={amount}
        onChange={handleAmount}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
      <TextField
        id="expense"
        name="expense"
        label="Expense"
        variant="outlined"
        value={charge}
        onChange={handleCharge}
        className={classes.expense}
      />
      <Button
        type="submit"
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
