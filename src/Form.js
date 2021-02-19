import React, { useState, useContext } from "react";
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
import { LanguageContext } from "./contexts/LanguageContext";

const Form = ({ classes }) => {
  const [isOpen, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { languages, language, changeLanguage, textData } = useContext(
    LanguageContext
  );

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            {textData.signup}
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="language" id="demo-controlled-open-select-label">
              Language
            </InputLabel>
            <Select
              labelId="language"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              onOpen={handleOpen}
              open={isOpen}
              onClose={handleClose}
            >
              <MenuItem value={language}>
                <em>None</em>
              </MenuItem>
              {languages.map((language) => (
                <MenuItem key={language.name} value={language.name}>
                  {language.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            onChange={handleUsernameChange}
            id="username"
            label={textData.username}
            autoComplete="off"
            helperText="enter your username"
            value={username}
          />
          <TextField
            helperText="enter your password"
            label={textData.password}
            autoComplete="off"
            id="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <FormControlLabel
            control={
              <Checkbox checked={rememberMe} onChange={handleRememberMe} />
            }
            label={textData.remember}
          />

          <Button type="submit" variant="contained" color="primary"></Button>
        </form>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Form);
