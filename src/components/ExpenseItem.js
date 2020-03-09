import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

export const ExpenseItem = ({
  expense: { id, charge, amount, handleDelete }
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      textAlign: "center",
      display: "grid",
      gridTemplateColumns: "1fr 3fr 2fr",
      gridTemplateRows: "auto",
      height: "auto",
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    },
    button: {
      fontSize: "1rem",
      margin: theme.spacing(1)
    },
    endButton: {
      fontSize: "1rem",
      margin: `0 {theme.spacing(1)}`
    },
    amount: {
      marginRight: ".5rem",
      color: "var(--mainRed)",
      alignSelf: "center",
      justifySelf: "flex-start"
    },
    charge: {
      color: "var(--mainGrey)",
      justifySelf: "start",
      alignSelf: "center"
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    }
  }));
  const classes = useStyles();
  return (
    <Paper className={classes.root} id={id}>
      <Typography variant="h4" className={classes.amount}>
        ${amount}
      </Typography>
      <Typography variant="h4" className={classes.charge}>
        {charge}
      </Typography>
      <div className={classes.buttonGroup}>
        <Button variant="contained" color="primary" className={classes.button}>
          <FaRegEdit />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.endButton}
          onClick={handleDelete}
        >
          <FaRegTrashAlt />
        </Button>
      </div>
    </Paper>
  );
};

export default ExpenseItem;
