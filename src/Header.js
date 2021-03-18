import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/styles";
import { findByLabelText } from "@testing-library/dom";

const useStyles = makeStyles(() => ({
  typograhpyStyle: {
    flex: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Typography className={classes.typograhpyStyle}>
          This is our Header!
        </Typography>
        <AddShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
}
