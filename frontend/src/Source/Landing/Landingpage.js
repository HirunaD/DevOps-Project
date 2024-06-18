import React from "react";
import Navbar from "../Navbar";
import Landingcomponent from "./Landingcomponent";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    background: {
      default: "#eeeeee",
    },
  },
});

const Landing = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#e1e1e1",
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Navbar />
          <Landingcomponent />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Landing;
