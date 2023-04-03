import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { Typography } from "@mui/material";

/**
 * The primary application layout.
 */
export function AppLayout(): JSX.Element {
  return (
    <React.Fragment>
      <React.Suspense>
        <Typography variant="h1">Welcome to React StarterKit</Typography>
        <Outlet />
      </React.Suspense>
      <Footer />
    </React.Fragment>
  );
}
