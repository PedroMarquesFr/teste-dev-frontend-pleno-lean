import axios from "axios";
interface User {
  id: number;
  name: string;
  phone: string;
  registrationDate: string;
  status: "Ativo" | "Inativo";
}

const fetchPatients = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(
      `${process.env.NEXT_PUBLIC_API}/users`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export { fetchPatients };
