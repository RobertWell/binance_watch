import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme=>({

  toolbar:{
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderWidth: "1px",
    borderStyle: "solid",
  }
}));

function TableHeadBar({title}) {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
    </Toolbar>
  );
}

export default TableHeadBar