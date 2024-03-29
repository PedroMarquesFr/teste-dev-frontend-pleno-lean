import { AppBar, Button, MenuItem } from "@mui/material";
import styled from "styled-components";

export const HeaderWrapper = styled.section`
  width: 56px;
`;

interface ButtonPageLinkProps {
  $primary?: boolean; // Use the $ prefix as an escape hatch with styled-components
}
export const ButtonPageLink = styled(Button)<ButtonPageLinkProps>`
  /* width: 56px; */
  background-color: unset;
  text-transform: none;
  color: ${(props) => (props.$primary ? "#9747ff" : "#6a6a6a")};
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.4px;
  border-bottom: ${(props) => (props.$primary ? "solid 2px #9747ff" : "unset")};
  margin: 0 8px;
  border-radius: unset;
`;

export const UserIcon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #9747ff;
  color: white;
`;

export const AppBarStyled = styled(AppBar)`
  background-color: white;
  box-shadow: unset;
  border-bottom: 1px solid var(--Foundation-Grey-grey-100, #ebebeb);
  padding: 0 16px;
`;

export const MenuItemStyled = styled(MenuItem)`
  background-color: var(--Foundation-CInza-cinza-800, #6a6a6a);
`;
