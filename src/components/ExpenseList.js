import React from "react";
import ExpenseItem from "./ExpenseItem";
import theme from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { FaPeace } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    padding: "0",
    margin: theme.spacing(1)
  }
});

export const ExpenseList = ({ expenses, handleClick }) => {
  const classes = useStyles();
  return (
    <>
      <ul className={classes.root}>
        {expenses.map(item => (
          <ExpenseItem key={item.id} expense={item} />
        ))}
      </ul>
      {expenses.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick()}
        >
          <FaPeace style={{ marginRight: "10px" }} />
          Clear Expenses
        </Button>
      )}
    </>
  );
};

export default ExpenseList;
