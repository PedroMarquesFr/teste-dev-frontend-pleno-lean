"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import 'react-toastify/dist/ReactToastify.css';
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
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiDataGrid-filterForm": {
            "& .MuiTextField-root": {
              "& fieldset": {
                borderColor: "green",
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
