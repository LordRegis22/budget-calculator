import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

export const ExpenseItem = ({ expense: { id, charge, amount } }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      textAlign: "center",
      display: "grid",
      gridTemplateColumns: "1fr 4fr 2fr",
      gridTemplateRows: "100px"
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
      alignSelf: "center"
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
      //"& nthChild(2)": { marginRight: "150px" }
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.root} id={id}>
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
        >
          <FaRegTrashAlt />
        </Button>
      </div>
    </div>
  );
};

export default ExpenseItem;
