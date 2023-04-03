// Third party imports
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// Local imports
import App from "./App";
import useTheme from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider>
      <ThemeProvider theme={useTheme()}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* <App /> */}
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
