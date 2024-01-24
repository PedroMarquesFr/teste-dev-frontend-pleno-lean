import styled from "styled-components";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { DataGrid } from "@mui/x-data-grid";
import {
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
export const DataGridPremiumStyled = styled(DataGridPremium)`
  border: unset;
  height: 66vh;
  & .MuiDataGrid-row {
    /* background-color: red; */
    height: 72px;
  }

  & #button-filter {
    background-color: red;
    color: red;
  }

  & .MuiDataGrid-panel {
    width: 1000px;
  }

  .MuiInput-input[id=":r34:"] {
    color: red;
    background-color: red;
  }
  .super-app-theme--Inativo {
    background-color: #f6f6f6;
  }
`;

export const GridToolbarFilterButtonStyled = styled(GridToolbarFilterButton)`
  /* background-color: red; */
  text-transform: none;
  svg {
    display: none;
  }
  color: #9747ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.4px;
`;
export const Title = styled.h3`
  color: var(--Foundation-CInza-cinza-900, #515151);
  font-feature-settings: "clig" off, "liga" off;
  /* typography/h5 */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.4%; /* 32.016px */
  margin-bottom: 32px;
`;

export const TextFieldSearch = styled(TextField)`
  width: 276px;
  /* height: 40px; */
  padding: unset;
`;

export const InactiveIndicator = styled.section`
  background-color: #e53e3e1a;
  color: #e53e3e;
  padding: 3px 11px;
  border-radius: 100px;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 133%; /* 15.96px */
  width: 65px;
`;

export const ActiveIndicator = styled.section`
  background-color: #0ab24326;
  color: #46855b;
  padding: 3px 11px;
  border-radius: 100px;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 133%; /* 15.96px */
  width: 65px;
`;

export const MenuTitle = styled.div`
  border-bottom: 1px solid #f6f6f6;
  padding: 8px 16px 14px 16px;
  color: var(--Foundation-Grey-grey-900, #515151);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.15px;
  width: 164px;
`;

export const MenuItemActivate = styled(MenuItem)`
  color: #2e7d32;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.15px;
`;

export const MenuItemDeactivate = styled(MenuItem)`
  color: #e53e3e;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.15px;
`;

export const OrderByButton = styled(Button)`
  text-transform: none;
  color: #9747ff;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.4px;
  margin-left: 10px;
`;
