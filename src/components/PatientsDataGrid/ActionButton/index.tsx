"use client";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuItemActivate, MenuItemDeactivate, MenuTitle } from "../styles";
import { PatientContext } from "@/contexts/PatientContext";

interface ActionButtonProps {
  rowId: number;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const { changePatientStatus } = useContext(PatientContext);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuTitle>Mudar status</MenuTitle>
        <MenuItemActivate
          onClick={() => {
            handleCloseUserMenu();
            changePatientStatus(props.rowId, "Ativo");
          }}
        >
          <CheckCircleOutlineIcon sx={{ marginRight: 1 }} />
          Ativar
        </MenuItemActivate>
        <MenuItemDeactivate
          onClick={() => {
            handleCloseUserMenu();
            changePatientStatus(props.rowId, "Inativo");
          }}
        >
          <BlockIcon sx={{ marginRight: 1 }} />
          Inativar
        </MenuItemDeactivate>
      </Menu>
    </Box>
  );
};

export default ActionButton;
