import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { User } from "../@types";

interface AuthContextProps {
  user: User | null;
  error: string;
  login: (email: string, password: string, onSuccess: () => void) => void;
  register: (
    name: string,
    email: string,
    phone_number: string,
    password: string,
    onSuccess: () => void
  ) => void;
  logout: () => void;
  fetchUserProfile: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const API_URL = "http://localhost:3000";
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string>("");

  const handleErrors = (error: any, defaultMessage: string) => {
    const errorMessage =
      error.response?.data?.message || error.message || defaultMessage;
    setError(errorMessage);
  };

 const fetchUserProfile = async () => {
   try {
     const profileResponse = await axios.get(`${API_URL}/auth/profile`, {
       withCredentials: true,
     });

     const userResponse = profileResponse.data;
     setUser(userResponse); 
   } catch (error) {
     handleErrors(error, "Ocorreu um erro ao buscar o perfil.");
   }
 };


  useEffect(() => {
    fetchUserProfile();
  }, []);

  const login = async (
    email: string,
    password: string,
    onSuccess: () => void
  ) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        await fetchUserProfile();
        onSuccess();
      } else {
        setError("Login falhou. Tente novamente mais tarde.");
      }
    } catch (error) {
      handleErrors(error, "Ocorreu um erro desconhecido.");
    }
  };

  const register = async (
    name: string,
    email: string,
    phone_number: string,
    password: string,
    onSuccess: () => void
  ) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth/register`,
        { name, email, phone_number, password },
        { withCredentials: true }
      );

      if (response.status === 201) {
        await fetchUserProfile();
        onSuccess();
      } else {
        setError("Registro falhou. Tente novamente mais tarde.");
      }
    } catch (error) {
      handleErrors(error, "Ocorreu um erro desconhecido.");
    }
  };

  const logout = () => {
    axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, error, login, register, logout, fetchUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
