import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 432,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    text: "#ffffff",
    background: "rgb(22, 26, 30)",
    primary: {
      light: "#5e92f3",
      main: "#1565c0",
      dark: "#003c8f",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#82e9de",
      main: "#4db6ac",
      dark: "#00867d",
      contrastText: "#ffffff",
    },

    third: {
      light: "#ffffff",
      main: "#e0e0e0",
      dark: "#aeaeae",
      contrastText: "#303030",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
  },
  brand_icon: {
    512: "assets/burn-512.png",
  },

  typography: {
    fontFamily: [
      "Noto Sans TC",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    // htmlFontSize: 10,
  },
  spot_background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

  overrides: {
    // MuiAppBar: {
    //   root: {
    //     // transform:'translateZ(0)',
    //   },
    // },
    MuiTextField: {
      root: {
        color: "yellow",
        // boxShadow:'white',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        "& fieldset": {
          borderColor: "white",
          
        },        
      },
    },
    MuiAutocomplete: {
      root: {
        // boxShadow: "0 1px 6px 1px white",
      },
      popupIndicator: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: "white",
        "&:hover": {
          background: "white",
        },
      },

      popper: {
        background: "rgb(22, 26, 30)",
        boxShadow: "0 1px 6px 2px white",
      },
    },
  },
  props: {
    MuiIconButton: {
      // disableRipple:
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
