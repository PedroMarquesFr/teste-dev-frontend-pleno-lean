import { AppBar, Button, MenuItem } from "@mui/material";
import styled from "styled-components";

export const HeaderWrapper = styled.section`
  width: 56px;
`;

export const HeaderButton = styled(Button)`
  width: 56px;
  background-color: unset;
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
