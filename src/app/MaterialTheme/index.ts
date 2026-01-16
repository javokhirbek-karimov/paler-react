import { createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";
import shadow from "./shadow";
import typography from "./typography";
import { maxWidth } from "@mui/system";

/**
 * LIGHT THEME (DEFAULT)
 */
const light = {
  palette: {
    type: "light",
    background: {
      default: "#080903",
      paper: common.black,
    },
    primary: {
      contrastText: "#ffffff",
      main: "#899052",
    },
    secondary: {
      contrastText: "#899052",
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#899052",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { height: "100%" },
        body: { background: "#f4f6f8", height: "100%", minHeight: "100%" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid #899052",
          color: "#899052",
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#899052",
            color: "#ffffff",
          },
        },
      },
    },
  },
  shadow,
  typography,
};

// A custom theme for this app
let theme = createTheme(light);
theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1300px",
          },
        },
      },
    },
  },
});

export default theme;
