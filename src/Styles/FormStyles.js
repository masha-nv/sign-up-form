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
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
    "& form": {
      padding: "2rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "& button": {
      marginTop: "1rem",
      padding: "1rem",
      width: 204.8,
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
    marginTop: "90px",
  },
  formControl: {
    minWidth: 204.8,
    margin: theme.spacing(1),
  },
});
