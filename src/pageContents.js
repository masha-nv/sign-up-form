import React, { useContext } from "react";
import { withStyles } from "@material-ui/core";
import { ThemeContext } from "./contexts/ThemeContext";

const styles = {
  root: {
    width: "100vw",
    height: "100vh",
  },
};

const PageContents = ({ children, classes }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: isDarkMode ? "#222831" : "#fff" }}
      className={classes.root}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(PageContents);
