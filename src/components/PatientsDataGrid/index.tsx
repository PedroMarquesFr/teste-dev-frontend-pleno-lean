"use client";
import { useContext, useEffect } from "react";
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
import { PatientContext } from "@/contexts/PatientContext";
import { format } from "date-fns";

function CustomToolbar() {
  const { findPatientsBySearchTerm } = useContext(PatientContext);
  return (
    <GridToolbarContainer>
      <TextFieldSearch
        id="outlined-basic"
        label="Pesquisar ID ou nome ou telefone..."
        onChange={(e) => {
          findPatientsBySearchTerm(e.target.value);
        }}
      />
      <GridToolbarFilterButtonStyled />
    </GridToolbarContainer>
  );
}

export default function DataGridPremiumDemo() {
  const { filteredData, getPatients, isLoading, findPatientsBySearchTerm } =
    useContext(PatientContext);
  useEffect(() => {
    getPatients();
  }, []);

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
    {
      field: "registrationDate",
      headerName: "Registration Date",
      renderCell: (params: { formattedValue: string }) => {
        const dateArray = params.formattedValue.split("-");
        const formattedDate = format(
          new Date(`${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`),
          "dd/MM/yyyy"
        );
        return <div>{formattedDate}</div>;
      },
      flex: 1,
    },
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
      renderCell: (params: { row: { id: number } }) => {
        console.log(":P", params);
        return <ActionButton rowId={params.row.id} />;
      },
      width: 30,
    },
  ];

  return (
    <Box sx={{ height: 520, width: "100%", padding: "40px" }}>
      <Title>Usuários</Title>
      <DataGridPremiumStyled
        getRowClassName={(params) => {
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
        rows={filteredData}
        // @ts-ignore
        columns={columns}
        apiRef={apiRef}
        loading={isLoading}
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
