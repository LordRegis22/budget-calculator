import React from "react";
import ExpenseItem from "./ExpenseItem";
import { Button } from "@material-ui/core";
import { FaPeace } from "react-icons/fa";

export const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(item => (
          <ExpenseItem key={item.id} expense={item} />
        ))}
      </ul>
      {expenses.length > 0 && (
        <Button variant="contained" color="primary">
          <FaPeace style={{ marginRight: "10px" }} />
          Clear Expenses
        </Button>
      )}
    </>
  );
};

export default ExpenseList;
