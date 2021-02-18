import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
  },
};

// 222831
const PageContents = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(PageContents);
