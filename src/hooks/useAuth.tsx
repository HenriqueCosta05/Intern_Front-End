import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../@types";

export default function useAuth() {
  const API_URL = "http://localhost:3000";
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleErrors = (error: any, defaultMessage: string) => {
    const errorMessage =
      error.response?.data?.message || error.message || defaultMessage;
    setErrors((prevErrors) => [...prevErrors, errorMessage]);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileResponse = await axios.get(`${API_URL}/auth/profile`, {
          withCredentials: true,
        });
        const userId = profileResponse.data.user.sub;

        const userResponse = await axios.get(`${API_URL}/users/${userId}`, {
          withCredentials: true,
        });
        setUser(userResponse.data);
      } catch (error) {
        handleErrors(error, "Ocorreu um erro ao buscar o perfil.");
      }
    };

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
        setErrors(["Login falhou. Tente novamente mais tarde."]);
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

      if (response.status === 200) {
        await fetchUserProfile();
        onSuccess();
      } else {
        setErrors(["Registro falhou. Tente novamente mais tarde."]);
      }
    } catch (error) {
      handleErrors(error, "Ocorreu um erro desconhecido.");
    }
  };

  const logout = () => {
    setUser(null);
  };
  const fetchUserProfile = async () => {
    try {
      const profileResponse = await axios.get(`${API_URL}/auth/profile`, {
        withCredentials: true,
      });
      const userId = profileResponse.data.user.sub;

      const userResponse = await axios.get(`${API_URL}/users/${userId}`, {
        withCredentials: true,
      });
      setUser(userResponse.data);
    } catch (error) {
      handleErrors(error, "Ocorreu um erro ao buscar o perfil.");
    }
  };

  return {
    user,
    errors,
    login,
    register,
    logout,
  };
}
