"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGridPremium,
  GridLogicOperator,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";
import {
  DataGridPremiumStyled,
  GridToolbarFilterButtonStyled,
  TextFieldSearch,
  Title,
} from "./styles";
import { Input, TextField, Theme } from "@mui/material";
import StatusCell from "./StatusCell";
import ActionButton from "./ActionButton";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <TextFieldSearch
        id="outlined-basic"
        label="Pesquisar ID ou nome ou telefone..."
      />
      <GridToolbarFilterButtonStyled />
    </GridToolbarContainer>
  );
}

export default function DataGridPremiumDemo() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    editable: true,
    visibleFields: ["ID", "Nome", "Telefone", "Data de cadastro", "Status"],
  });
  const apiRef = useGridApiRef();

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "registrationDate", headerName: "Registration Date", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params: { formattedValue: "Ativo" | "Inativo" }) => (
        <StatusCell formattedValue={params.formattedValue} />
      ),
      flex: 1,
    },
    {
      field: "action",
      headerName: "",
      renderCell: (params: { formattedValue: "Ativo" | "Inativo" }) => (
        <ActionButton />
      ),
      width: 30,
    },
  ];

  return (
    <Box sx={{ height: 520, width: "100%", padding: "40px" }}>
      <Title>Usuários</Title>
      <DataGridPremiumStyled
        getRowClassName={(params) => {
          console.log("XD", params);
          return `super-app-theme--${params.row.status}`;
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
            columnsSort: "asc",
            filterFormProps: {
              logicOperatorInputProps: {
                variant: "outlined",
                size: "small",
              },
              columnInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              operatorInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: "outlined",
                  size: "small",
                },
              },
              deleteIconProps: {
                sx: {
                  "& .MuiSvgIcon-root": { color: "#d32f2f" },
                },
              },
            },
            sx: {
              // Customize inputs using css selectors
              "& .MuiDataGrid-filterForm": { p: 2 },
              "& .MuiDataGrid-filterForm:nth-child(even)": {
                backgroundColor: (theme: Theme) =>
                  theme.palette.mode === "dark" ? "#444" : "#f5f5f5",
              },
              "& .MuiDataGrid-filterFormLogicOperatorInput": { mr: 2 },
              "& .MuiDataGrid-filterFormColumnInput": { mr: 2, width: 150 },
              "& .MuiDataGrid-filterFormOperatorInput": { mr: 2 },
              "& .MuiDataGrid-filterFormValueInput": { width: 200 },
              "& .css-1l9x0co-MuiButtonBase-root-MuiButton-root:nth-child(2)": {
                color: "red",
                "text-transform": "none",
              },
              "& .css-1l9x0co-MuiButtonBase-root-MuiButton-root:nth-child(1)": {
                color: "#9747ff",
                "text-transform": "none",
              },
            },
          },
        }}
        pagination
        rows={[
          {
            id: 94944,
            name: "Maria Eduarda Almeida",
            phone: "+55 (081) 1339-6738",
            registrationDate: "03-10-2017",
            status: "Inativo",
          },
          {
            id: 35084,
            name: "Pietro Nascimento",
            phone: "(061) 2731-6646",
            registrationDate: "09-02-1981",
            status: "Ativo",
          },
          {
            id: 43475,
            name: "Ana Júlia Cardoso",
            phone: "+55 71 5896-8600",
            registrationDate: "27-09-1978",
            status: "Inativo",
          },
          {
            id: 45526,
            name: "Luana Moreira",
            phone: "+55 (051) 3516 8229",
            registrationDate: "16-07-1976",
            status: "Ativo",
          },
          {
            id: 70347,
            name: "Dr. Raul Nogueira",
            phone: "+55 84 0077 0201",
            registrationDate: "02-08-1989",
            status: "Inativo",
          },
          {
            id: 89231,
            name: "Maria Fernanda Dias",
            phone: "(041) 3054 8650",
            registrationDate: "07-02-2003",
            status: "Inativo",
          },
          {
            id: 50703,
            name: "Rodrigo Ferreira",
            phone: "+55 61 4940-8882",
            registrationDate: "04-12-1995",
            status: "Inativo",
          },
          {
            id: 77321,
            name: "Emanuella Viana",
            phone: "0300-966-1654",
            registrationDate: "11-07-2016",
            status: "Inativo",
          },
          {
            id: 15749,
            name: "Sophia Gonçalves",
            phone: "(081) 1067-0242",
            registrationDate: "11-01-1992",
            status: "Inativo",
          },
          {
            id: 55740,
            name: "Caroline Cavalcanti",
            phone: "+55 (084) 8120 8997",
            registrationDate: "28-06-1984",
            status: "Ativo",
          },
          {
            id: 75048,
            name: "Lorena Viana",
            phone: "+55 (084) 5352-2345",
            registrationDate: "26-08-2015",
            status: "Inativo",
          },
          {
            id: 67015,
            name: "Ana Clara da Paz",
            phone: "+55 11 5286-4851",
            registrationDate: "24-07-1989",
            status: "Inativo",
          },
          {
            id: 34992,
            name: "Dr. Bruno Lopes",
            phone: "(011) 8644 4722",
            registrationDate: "06-08-2008",
            status: "Ativo",
          },
          {
            id: 80174,
            name: "Heitor da Cunha",
            phone: "(031) 2273-8627",
            registrationDate: "03-05-1974",
            status: "Ativo",
          },
          {
            id: 42203,
            name: "Gustavo Moraes",
            phone: "71 1512-0153",
            registrationDate: "19-09-1979",
            status: "Ativo",
          },
          {
            id: 66871,
            name: "Eduarda Costela",
            phone: "+55 (051) 2621 6464",
            registrationDate: "25-11-2023",
            status: "Inativo",
          },
          {
            id: 21776,
            name: "Mirella Aragão",
            phone: "+55 61 2079 8002",
            registrationDate: "08-01-1976",
            status: "Inativo",
          },
          {
            id: 72516,
            name: "Caroline Santos",
            phone: "0300-541-4731",
            registrationDate: "22-04-1974",
            status: "Ativo",
          },
          {
            id: 42845,
            name: "Maria Luiza Fogaça",
            phone: "+55 21 4587-7589",
            registrationDate: "21-05-1981",
            status: "Inativo",
          },
          {
            id: 11948,
            name: "Luiz Gustavo Santos",
            phone: "41 4138-3668",
            registrationDate: "12-01-1989",
            status: "Ativo",
          },
        ]}
        // @ts-ignore
        columns={columns}
        apiRef={apiRef}
        loading={loading}
        disableRowSelectionOnClick
        // initialState={initialState}
        components={{
          Toolbar: CustomToolbar,
        }}
        density="comfortable"
      />
    </Box>
  );
}
