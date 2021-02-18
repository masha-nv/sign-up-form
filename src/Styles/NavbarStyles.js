import { fade } from "@material-ui/core/styles/colorManipulator";

export default (theme) => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    marginLeft: "auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
    "& label": {
      paddingLeft: "10px",
      lineHeight: "20px",
    },
    "& input": {
      paddingLeft: "10px",
      lineHeight: "20px",
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
});
