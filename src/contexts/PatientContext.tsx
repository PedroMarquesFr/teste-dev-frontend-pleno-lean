import { fetchPatients } from "@/services/PatientServices";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: number;
  name: string;
  phone: string;
  registrationDate: string;
  status: "Ativo" | "Inativo";
}
interface PatientContextType {
  data: User[];
  filteredData: User[];
  getPatients: () => void;
  isLoading: boolean;
  findPatientsBySearchTerm: (searchTerm: string) => void;
  changePatientStatus: (
    patientId: number,
    newStatus: "Ativo" | "Inativo"
  ) => void;
}

const PatientContext = createContext<PatientContextType>({
  data: [],
  filteredData: [],
  getPatients: () => {},
  isLoading: false,
  findPatientsBySearchTerm: (searchTerm: string) => {},
  changePatientStatus: (patientId, newStatus) => {},
});

type ThemeContextProps = {
  children: ReactNode;
};
const PatientProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const getPatients = async () => {
    setIsLoading(true);
    const patients = await fetchPatients();
    setData(patients);
    setFilteredData(patients);
    setIsLoading(false);
  };

  const findPatientsBySearchTerm = (searchTerm: string) => {
    const filteredItems = data.filter((patient) => {
      if (
        patient.name.includes(searchTerm) ||
        patient.phone.includes(searchTerm) ||
        patient.registrationDate.includes(searchTerm) ||
        patient.status.includes(searchTerm) ||
        patient.id.toString().includes(searchTerm)
      ) {
        return true;
      }
      return false;
    });
    setFilteredData(filteredItems);
  };

  const changePatientStatus = (
    patientId: number,
    newStatus: "Ativo" | "Inativo"
  ) => {
    const changedStatusTemporary = filteredData.map((user) => {
      if (user.id === patientId) {
        return {
          ...user,
          status: newStatus,
        };
      }
      return user;
    });
    setFilteredData(changedStatusTemporary);
  };
  return (
    <PatientContext.Provider
      value={{
        data,
        filteredData,
        getPatients,
        isLoading,
        findPatientsBySearchTerm,
        changePatientStatus,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
export { PatientContext, PatientProvider };
