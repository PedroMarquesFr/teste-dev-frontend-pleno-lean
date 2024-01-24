import validateEmail from "@/utils/validateEmail";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const USER_MOCK = {
  email: "admin@gmail.com",
  password: "1234567",
};

interface UserContextType {
  emailError?: boolean;
  passwordError?: boolean;
  emailHelperText?: string;
  passwordHelperText?: string;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const UserContext = createContext<UserContextType>({});

type ThemeContextProps = {
  children: ReactNode;
};
const UserProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email") || "";
    const password = data.get("password") || "";

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
    if (USER_MOCK.email !== email) {
      setEmailError(true);
      setEmailHelperText("Email não encontrado. Confira e tente novamente.");
      isValid = false;
    }
    if (USER_MOCK.password !== password) {
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
      Cookies.set(
        "fakeToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      );
      router.push("/patients");
    }
  };

  return (
    <UserContext.Provider
      value={{
        emailError,
        passwordError,
        emailHelperText,
        passwordHelperText,
        handleSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
