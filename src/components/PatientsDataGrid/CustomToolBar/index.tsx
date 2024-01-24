"use client";
import { GridToolbarContainer } from "@mui/x-data-grid-premium";
import {
  GridToolbarFilterButtonStyled,
  OrderByButton,
  TextFieldSearch,
} from "../styles";
import { useContext, useState } from "react";
import { PatientContext } from "@/contexts/PatientContext";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { motion } from "framer-motion";

function ExpandLessIconComponent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ExpandLessIcon style={{ fontSize: 20 }} sx={{ ml: 1, mt: 1 }} />
    </motion.div>
  );
}
function ExpandMoreIconComponent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ExpandMoreIcon style={{ fontSize: 20 }} sx={{ ml: 1, mt: 1 }} />
    </motion.div>
  );
}

function CustomToolbar() {
  const {
    findPatientsBySearchTerm,
    sortPatientsById,
    sortPatientsByName,
    sortPatientsPhone,
    sortPatientsByStatus,
    sortPatientsDate,
  } = useContext(PatientContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <GridToolbarContainer>
      <TextFieldSearch
        id="outlined-basic"
        label="Pesquisar ID ou nome ou telefone..."
        onChange={(e) => {
          findPatientsBySearchTerm(e.target.value);
        }}
        // sx={{height:100}}
        size="small"
      />
      <OrderByButton id="basic-button" onClick={handleClick}>
        Ordenar por
        {anchorEl ? <ExpandLessIconComponent /> : <ExpandMoreIconComponent />}
      </OrderByButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <FormControl sx={{ px: 2 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              onClick={sortPatientsById}
              value="id"
              control={<Radio />}
              label="ID"
            />
            <FormControlLabel
              onClick={sortPatientsByName}
              value="name"
              control={<Radio />}
              label="Nome"
            />
            <FormControlLabel
              onClick={sortPatientsPhone}
              value="phone"
              control={<Radio />}
              label="Telefone"
            />
            <FormControlLabel
              onClick={sortPatientsDate}
              value="registrationDate"
              control={<Radio />}
              label="Data de cadastro"
            />
            <FormControlLabel
              onClick={sortPatientsByStatus}
              value="status"
              control={<Radio />}
              label="Status"
            />
          </RadioGroup>
        </FormControl>
      </Menu>
      <GridToolbarFilterButtonStyled />
    </GridToolbarContainer>
  );
}

export default CustomToolbar;
