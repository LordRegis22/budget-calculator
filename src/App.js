import React, { useState, useEffect } from "react";
import "./App.css";
import { GiGreekSphinx } from "react-icons/gi";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuid } from "uuid";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme.js";

// const initialExpenses = [
//   { id: uuid(), charge: "Rent", amount: 800 },
//   { id: uuid(), charge: "Car", amount: 500 },
//   { id: uuid(), charge: "Amex", amount: 1000 }
// ];

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };
  const handleCharge = event => {
    setCharge(event.target.value);
  };
  const handleAmount = event => {
    setAmount(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (charge && amount) {
      if (edit) {
        let tempExpenses = expenses.map(item =>
          id === item.id ? { ...item, charge, amount } : item
        );
        setExpenses(tempExpenses);
        handleAlert({ type: "success", text: "Item successfully edited." });
        setEdit(false);
      } else {
        setExpenses([{ id: uuid(), charge, amount }, ...expenses]);
        handleAlert({ type: "success", text: "Expense successfully added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "error", text: "Please enter a Cost and Expense" });
    }
  };

  const handleClick = () => {
    setExpenses([]);
    setCharge("");
    setAmount("");
  };

  const handleAmountClick = () => {
    let sortedArray = expenses.slice(0);
    sortedArray.sort((a, b) => {
      return a.amount - b.amount;
    });
    setExpenses(sortedArray);
  };

  const handleChargeClick = () => {
    let sortedArray = expenses.slice(0);
    sortedArray.sort((a, b) => {
      return a.charge.toUpperCase() > b.charge.toUpperCase() ? 1 : -1;
    });
    setExpenses(sortedArray);
  };

  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "error", text: "Item deleted." });
  };

  const handleEdit = id => {
    setEdit(true);
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    console.log(expense);
  };

  const useStyles = makeStyles({
    root: { textAlign: "center", margin: theme.spacing(1) },
    title: { margin: theme.spacing(2) },
    total: { color: "var(--mainRed)" },
    background: { backgroundColor: "#fafafa", position: "relative" },
    sphinx: {
      fontSize: "15rem",
      margin: theme.spacing(5)
    }
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.background}>
        <Alert type={alert.type} text={alert.text} show={alert.show} />
        <Typography variant="h1">Budget Calculator</Typography>
        <main className="App">
          <ExpenseForm
            charge={charge}
            amount={amount}
            handleCharge={handleCharge}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            handleAlert={handleAlert}
            edit={edit}
          />
          <ExpenseList
            expenses={expenses}
            handleClick={handleClick}
            handleAmountClick={handleAmountClick}
            handleChargeClick={handleChargeClick}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </main>
        <Typography variant="h2" className={classes.title}>
          {`Total Spending: `}
          <span className={classes.total}>
            $
            {expenses.reduce((total, current) => {
              return (total += parseInt(current.amount));
            }, 0)}
          </span>
        </Typography>
      </Card>
      <GiGreekSphinx className={`sphinx ${classes.sphinx}`} />
    </div>
  );
}

export default App;
