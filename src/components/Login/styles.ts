import styled from "styled-components";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "@mui/material/Container";

export const ButtonStyled = styled(Button)`
  width: 180px;
  &:hover {
    background-color: #9747ff;
  }
  text-transform: none;
`;

export const ForgotPasswordLink = styled(Link)`
  color: #9747ff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
  text-decoration: none;
`;

export const Welcome = styled.h1`
  color: var(--Foundation-CInza-cinza-900, #515151);

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.15px;
  margin-bottom: 8px;
  margin-top: 32px;
`;

export const Info = styled.h3`
  color: var(--Foundation-CInza-cinza-800, #6a6a6a);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%; /* 28px */
  letter-spacing: 0.15px;
  margin-bottom: 32px;
  margin-top: 0;
`;

export const Logo = styled.h3`
  color: #9d9d9d;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 120% */
  letter-spacing: 0.4px;
  margin: unset;
  margin-right: 20px;
`;

export const CompanyImage = styled.div`
  background-color: #9747ff;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

export const StyledContainer = styled(Container)`
  position: absolute;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  padding: 80px 200px 80px 96px;
  z-index: 2;
  background-color: white;
  @media (max-width: 950px) {
    height: 80vh;
    width: 100vw;
    bottom: 0;
    padding: 80px 96px;

    @media (max-width: 400px) {
      height: 100vh;
      width: 100vw;
      bottom: 0;
      padding: 20px;
    }
  }
`;

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
`;
