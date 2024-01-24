"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React, { createContext, ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { purple } from "@mui/material/colors";
import { PatientProvider } from "./PatientContext";

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  // },
  components: {
    // Name of the component
    MuiTextField: {
      // The default props to change
      defaultProps: {
        // Set the variant to outlined for all TextFields
        variant: "outlined",
      },
      // The style overrides for the TextField's 'root' slot
      styleOverrides: {
        root: {
          "& .MuiDataGrid-filterForm": {
            "& .MuiTextField-root": {
              // Apply outline style
              "& fieldset": {
                borderColor: "green", // Example color for the outline
              },
            },
          },
        },
      },
    },
  },
});
type ContextHandleProps = {
  children: ReactNode;
};
export default function ContextHandle({ children }: ContextHandleProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <PatientProvider>{children}</PatientProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
