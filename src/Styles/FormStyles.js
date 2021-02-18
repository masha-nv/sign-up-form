import { green, pink } from "@material-ui/core/colors";

export default (theme) => ({
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    margin: "auto",
    height: "4rem",
    width: "4rem",
  },
  title: {
    textAlign: "center",
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    padding: "2rem 0",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    "& form": {
      padding: "2rem 0",
      display: "flex",
      flexDirection: "column",
    },
    "& button": {
      marginTop: "1rem",
      padding: "1rem",
    },
  },
  root: {
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1),
  },
});
