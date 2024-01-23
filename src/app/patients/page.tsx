import Header from "@/components/Header";
import DataGridPremiumDemo from "@/components/PatientsDataGrid";
import React from "react";

// import { Container } from './styles';

const Patients: React.FC = () => {
  return (
    <section>
      <Header />
      <DataGridPremiumDemo/>
    </section>
  );
};

export default Patients;
