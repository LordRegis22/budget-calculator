import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme.js";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";

export const Alert = ({ show, type, text }) => {
  const useStyles = makeStyles({
    root: {
      textAlign: "center",
      margin: theme.spacing(1),
      position: "absolute",
      width: "100%"
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
    <Box className={classes.root}>
      <Collapse in={show}>
        <Paper>
          {type === "success" ? (
            <Typography variant="h6" className={classes.success}>
              {text}
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.error}>
              {text}
            </Typography>
          )}
        </Paper>
      </Collapse>
    </Box>
  );
};

export default Alert;
