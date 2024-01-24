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
  sortPatientsById: () => void;
  sortPatientsByName: () => void;
  sortPatientsPhone: () => void;
  sortPatientsByStatus: () => void;
  sortPatientsDate: () => void;
}

const PatientContext = createContext<PatientContextType>({
  data: [],
  filteredData: [],
  getPatients: () => {},
  isLoading: false,
  findPatientsBySearchTerm: (searchTerm: string) => {},
  changePatientStatus: (patientId, newStatus) => {},
  sortPatientsById: () => {},
  sortPatientsByName: () => {},
  sortPatientsPhone: () => {},
  sortPatientsByStatus: () => {},
  sortPatientsDate: () => {},
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
    const searchTermLowCase = searchTerm.toLowerCase();
    const filteredItems = data.filter((patient) => {
      if (
        patient.name.toLowerCase().includes(searchTermLowCase) ||
        patient.phone.toLowerCase().includes(searchTermLowCase) ||
        patient.registrationDate.toLowerCase().includes(searchTermLowCase) ||
        patient.status.toLowerCase().includes(searchTermLowCase) ||
        patient.id.toString().includes(searchTermLowCase)
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

  const sortPatientsById = () => {
    const filteredDataCOpy = [...filteredData];
    const patientsSorted = filteredDataCOpy.sort(
      (first, second) => first.id - second.id
    );
    setFilteredData(patientsSorted);
  };

  const sortPatientsByName = () => {
    const filteredDataCOpy = [...filteredData];
    const patientsSorted = filteredDataCOpy.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setFilteredData(patientsSorted);
  };

  const sortPatientsByStatus = () => {
    const filteredDataCopy = [...filteredData];
    const patientsSorted = filteredDataCopy.sort((a, b) => {
      let statusA = a.status.toLowerCase();
      let statusB = b.status.toLowerCase();

      if (statusA < statusB) {
        return -1;
      }
      if (statusA > statusB) {
        return 1;
      }
      return 0;
    });
    setFilteredData(patientsSorted);
  };
  const sortPatientsPhone = () => {
    const filteredDataCopy = [...filteredData];
    const patientsSorted = filteredDataCopy.sort((a, b) => {
      let phoneA = a.phone.toLowerCase();
      let phoneB = b.phone.toLowerCase();

      if (phoneA < phoneB) {
        return -1;
      }
      if (phoneA > phoneB) {
        return 1;
      }
      return 0;
    });
    setFilteredData(patientsSorted);
  };

  const sortPatientsDate = () => {
    const filteredDataCopy = [...filteredData];
    const patientsSorted = filteredDataCopy.sort((a, b) => {
      // const aFormated = a.registrationDate.split("-");
      
      const dateA = new Date(a.registrationDate).getTime();;
      const dateB = new Date(b.registrationDate).getTime();;
      return dateA - dateB;
  });
    setFilteredData(patientsSorted);
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
        sortPatientsById,
        sortPatientsByName,
        sortPatientsPhone,
        sortPatientsByStatus,
        sortPatientsDate
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
export { PatientContext, PatientProvider };
