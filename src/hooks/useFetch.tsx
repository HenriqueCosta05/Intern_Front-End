import axios from "axios";
import { useState } from "react";
import { Task } from "../@types/Task";

export default function useFetch() {
  const API_URL = "http://localhost:3000";

  const [data, setData] = useState<Task | null>(null); // Default to null when no data is loaded
  const [error, setError] = useState<string>("");

  // GET request
  async function get(url: string) {
    try {
      const response = await axios.get(`${API_URL}/${url}`, {
        withCredentials: true,
      });
      setData(response.data);
      return response.data; // Return data for immediate use
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Ocorreu um erro desconhecido.";
      setError(errorMessage);
      throw new Error(errorMessage); // Ensure errors are properly propagated
    }
  }

  // POST request
  async function post(url: string, data: unknown) {
    try {
      const response = await axios.post(`${API_URL}/${url}`, data, {
        withCredentials: true,
      });
      setData(response.data);
      return response.data; // Return data for immediate use
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Ocorreu um erro desconhecido.";
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }

  // PUT request
  async function put(url: string, data: unknown) {
    try {
      const response = await axios.put(`${API_URL}/${url}`, data, {
        withCredentials: true,
      });
      setData(response.data);
      return response.data; // Return data for immediate use
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Ocorreu um erro desconhecido.";
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }

  // DELETE request
  async function del(url: string) {
    try {
      const response = await axios.delete(`${API_URL}/${url}`, {
        withCredentials: true,
      });
      setData(response.data);
      return response.data; // Return data for immediate use
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Ocorreu um erro desconhecido.";
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }

  return {
    data,
    error,
    get,
    post,
    put,
    del,
  };
}
