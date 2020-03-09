import React from "react";
import ExpenseItem from "./ExpenseItem";
import theme from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { FaPeace, FaSortAlphaDown, FaSortNumericDown } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    padding: "0",
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
});

export const ExpenseList = ({
  expenses,
  handleClick,
  handleAmountClick,
  handleChargeClick
}) => {
  const classes = useStyles();
  return (
    <>
      <ul className={classes.root}>
        {expenses.map(item => (
          <ExpenseItem key={item.id} expense={item} />
        ))}
      </ul>
      {expenses.length > 0 && (
        <>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleClick()}
          >
            <FaPeace style={{ marginRight: "10px" }} />
            Clear Expenses
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => handleAmountClick()}
          >
            <FaSortNumericDown style={{ marginRight: "10px" }} />
            Sort by $
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => handleChargeClick()}
          >
            <FaSortAlphaDown style={{ marginRight: "10px" }} />
            Sort A-Z
          </Button>
        </>
      )}
    </>
  );
};

export default ExpenseList;
