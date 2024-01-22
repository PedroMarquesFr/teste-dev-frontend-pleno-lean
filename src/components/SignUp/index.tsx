"use client";
import { useState } from "react";
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
} from "./style";
import validateEmail from "@/utils/validateEmail";

export default function SignUp() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email") || "";
    const password = data.get("password") || "";

    // Reset validation states
    setEmailError(false);
    setPasswordError(false);
    setEmailHelperText("");
    setPasswordHelperText("");

    let isValid = true;

    if (!validateEmail(email.toString())) {
      setEmailError(true);
      setEmailHelperText("Email não encontrado. Confira e tente novamente.");
      isValid = false;
    }
    if (typeof password === "string" && password?.length < 6) {
      setPasswordError(true);
      setPasswordHelperText(
        "Senha incorreta. Por favor, verifique e tente novamente."
      );
      isValid = false;
    }

    if (isValid) {
      console.log({
        email,
        password,
      });
      // Proceed with form submission logic...
    }
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
