import React, { useState } from "react";
import "./App.css";
import { GiGreekSphinx } from "react-icons/gi";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuid } from "uuid";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const initialExpenses = [
  { id: uuid(), charge: "Rent", amount: 800 },
  { id: uuid(), charge: "Car", amount: 500 },
  { id: uuid(), charge: "Amex", amount: 1000 }
];

function App() {
  const useStyles = makeStyles({ root: { textAlign: "center" } });
  const classes = useStyles();

  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const handleCharge = event => {
    console.log("change");
    setCharge(event.target.value);
  };
  const handleAmount = event => {
    setAmount(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (charge && amount) {
      setExpenses([
        { id: uuid(), charge: charge, amount: amount },
        ...expenses
      ]);
    }
  };

  const handleClick = () => {
    setExpenses([]);
    setCharge("");
    setAmount("");
  };

  return (
    <div className={classes.root}>
      <Card>
        <Alert />
        <h1>Budget Calculator</h1>
        <main className="App">
          <ExpenseForm
            charge={charge}
            amount={amount}
            handleCharge={handleCharge}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
          />
          <ExpenseList expenses={expenses} handleClick={handleClick} />
        </main>
        <h1>
          Total Spending:{" "}
          <span className="total">
            $
            {expenses.reduce((total, current) => {
              return (total += current.amount);
            }, 0)}
          </span>
        </h1>
      </Card>
      <div className="container">
        <GiGreekSphinx className="paw" />
      </div>
    </div>
  );
}

export default App;
