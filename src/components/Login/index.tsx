"use client";
import { useContext, useState } from "react";
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
import {
  ButtonStyled,
  CompanyImage,
  ForgotPasswordLink,
  Info,
  Logo,
  StyledContainer,
  Welcome,
  Wrapper,
} from "./styles";
import validateEmail from "@/utils/validateEmail";
import { UserContext } from "@/contexts/UserContext";

export default function SignUp() {
  const {
    handleSubmit,
    emailError,
    passwordError,
    emailHelperText,
    passwordHelperText,
  } = useContext(UserContext);

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
                  error={emailError}
                  helperText={emailHelperText}
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
                  error={passwordError}
                  helperText={passwordHelperText}
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
