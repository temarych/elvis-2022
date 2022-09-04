import { ThemeOptions } from "@mui/material";

const createThemeOptions = (mode: "dark" | "light") => ({
  palette: {
    mode
  },
  typography: {
    fontFamily: "Montserrat, Roboto, sans-serif"
  },
  breakpoints: {
    values: {
      xs: 700
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "1em",
          boxShadow: "none",
          borderBottom: `1px solid ${
            mode === "light"
            ? "rgb(214, 214, 214)" 
            : "rgb(0, 0, 0)"
          }`,
          background: (
            mode === "light" 
            ? "rgba(255, 255, 255, 0.8)" 
            : "rgba(0, 0, 0, 0.8)"
          ),
          backdropFilter: "blur(10px)",
          position: "sticky",
          color: "black"
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0.5em 1em"
        }
      }
    }
  }
} as ThemeOptions);

export default createThemeOptions;