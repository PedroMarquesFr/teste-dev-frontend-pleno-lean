import React from "react";
import { ActiveIndicator, InactiveIndicator } from "../styles";
import { motion } from "framer-motion";

// import { Container } from './styles';

interface StatusCellProps {
  formattedValue: "Ativo" | "Inativo";
}

const ActiveComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ delay: 0.3, duration: 0.5 }}
    >
      <ActiveIndicator>Ativo</ActiveIndicator>
    </motion.div>
  );
};

const InactiveComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ delay: 0.3, duration: 0.5 }}
    >
      <InactiveIndicator>Inativo</InactiveIndicator>
    </motion.div>
  );
};
const StatusCell: React.FC<StatusCellProps> = (props) => {
  return (
    <div>
      {props.formattedValue === "Ativo" ? (
        <ActiveComponent />
      ) : (
        <InactiveComponent />
      )}
    </div>
  );
};

export default StatusCell;
