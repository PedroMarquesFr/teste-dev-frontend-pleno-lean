"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React, { createContext, ReactNode } from "react";
import { UserProvider } from "./UserContext";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  // },
});
type ContextHandleProps = {
  children: ReactNode;
};
export default function ContextHandle({ children }: ContextHandleProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}
