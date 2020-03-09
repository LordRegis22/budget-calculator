import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme.js";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { FaExclamation, FaThumbsUp } from "react-icons/fa";

export const Alert = ({ show, type, text }) => {
  const useStyles = makeStyles({
    root: {
      textAlign: "center",
      position: "absolute",
      width: "100%",
      boxSizing: "border-box"
    },
    success: {
      backgroundColor: "rgb(221,207,246)",
      border: "solid 1px rgb(98,0,234)",
      padding: theme.spacing(2),
      color: "rgb(98,0,234)",
      borderRadius: "4px",
      width: "100%"
    },
    error: {
      backgroundColor: "rgb(243, 206, 234)",
      border: "solid 1px var(--mainRed)",
      padding: theme.spacing(2),
      borderRadius: "4px",
      color: "rgb(213, 0, 170)",
      width: "100%"
    }
  });
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Collapse in={show}>
        <Paper>
          {type === "success" ? (
            <Typography variant="h6" className={classes.success}>
              <FaThumbsUp /> {text}
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.error}>
              <FaExclamation /> {text}
            </Typography>
          )}
        </Paper>
      </Collapse>
    </Container>
  );
};

export default Alert;
