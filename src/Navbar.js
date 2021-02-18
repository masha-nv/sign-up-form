import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  Input,
  FormControl,
  FormHelperText,
  FilledInput,
  InputLabel,
} from "@material-ui/core";

import styles from "./Styles/NavbarStyles";

function Navbar({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.grow}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <span>🇪🇸</span>
          </IconButton>
          <Switch />

          <Typography variant="h6" className={classes.title} color="inherit">
            App Title
          </Typography>

          <TextField
            className={classes.search}
            autoComplete="off"
            label="Search..."
            id="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon className={classes.icon} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
