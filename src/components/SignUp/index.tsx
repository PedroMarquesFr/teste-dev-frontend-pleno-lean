"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { purple } from '@mui/material/colors';
import {
  ButtonStyled,
  CompanyImage,
  ForgotPasswordLink,
  Info,
  Logo,
  StyledContainer,
  Welcome,
  Wrapper,
} from "./style";

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

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Wrapper>
      <StyledContainer>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Logo>LOGO</Logo>
          <Welcome>Bem-vindo(a)</Welcome>
          <Info>Acesse sua conta para iniciar a sessão</Info>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <ForgotPasswordLink href="#">
                  Esqueceu sua senha?
                </ForgotPasswordLink>
              </Grid>
            </Grid>
            <ButtonStyled
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#9747FF" }}
            >
              Acessar plataforma
            </ButtonStyled>
          </Box>
        </Box>
      </StyledContainer>
      <CompanyImage />
    </Wrapper>
  );
}
