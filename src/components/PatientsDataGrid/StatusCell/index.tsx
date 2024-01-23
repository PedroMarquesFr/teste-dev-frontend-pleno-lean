import React from "react";
import { ActiveIndicator, InactiveIndicator } from "../styles";

// import { Container } from './styles';

interface StatusCellProps {
  formattedValue: "Ativo" | "Inativo";
}
const StatusCell: React.FC<StatusCellProps> = (props) => {
  return (
    <div>
      {props.formattedValue === "Ativo" ? (
        <ActiveIndicator>Ativo</ActiveIndicator>
      ) : (
        <InactiveIndicator>Inativo</InactiveIndicator>
      )}
    </div>
  );
};

export default StatusCell;
