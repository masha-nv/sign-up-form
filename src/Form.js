import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Avatar,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import styles from "./Styles/FormStyles";
import { withStyles } from "@material-ui/core/styles";

const Form = ({ classes }) => {
  const languages = ["English", "Spanish", "French"];
  const [language, setLanguage] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setLanguage("");
  };
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked ? true : false);
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root} elevation={14} square={true}>
        <form onSubmit={handleSubmit}>
          <Avatar className={classes.pink}>
            <LockIcon fontSize="large" />
          </Avatar>
          <Typography className={classes.title} variant="h5">
            Sign Up
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="language" id="demo-controlled-open-select-label">
              Language
            </InputLabel>
            <Select
              labelId="language"
              value={language}
              onChange={handleChange}
              onOpen={handleOpen}
              open={isOpen}
              onClose={handleClose}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            onChange={handleUsernameChange}
            id="username"
            label="Username"
            autoComplete="off"
            helperText="enter your username"
            value={username}
          />
          <TextField
            helperText="enter your password"
            label="Password"
            autoComplete="off"
            id="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <FormControlLabel
            control={
              <Checkbox checked={rememberMe} onChange={handleRememberMe} />
            }
            label="Remember Me"
          />

          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Form);
