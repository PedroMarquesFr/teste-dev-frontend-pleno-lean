"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React, { createContext, ReactNode } from "react";

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
type ThemeContextProps = {
  children: ReactNode;
};
export default function ThemeContext({ children }: ThemeContextProps) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
