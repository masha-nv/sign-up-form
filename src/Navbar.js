import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  Input,
  FormControl,
  FormHelperText,
  FilledInput,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const { root, menuButton, title, grow, search } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={menuButton}
            color="inherit"
            aria-label="menu"
          >
            <span>🇪🇸</span>
          </IconButton>
          <Switch />
          <Typography variant="h6" className={title} color="inherit">
            App Title
          </Typography>
          <Hidden smDown>
            <TextField
              autoComplete="off"
              label="search"
              id="search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
