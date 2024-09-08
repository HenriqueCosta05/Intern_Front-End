import axios from "axios";
import { useState } from "react";
import { Task } from "../@types/Task";

export default function useFetch() {
    const API_URL = "http://localhost:3000"

    const [data, setData] = useState<Task | unknown>([]);
    const [error, setError] = useState<string>("");

    function get(url: string) {
        
        axios.get(`${API_URL}/${url}`, { withCredentials: true })
            .then(response => {
                setData(response.data);
                
            }).catch(error => {
                const errorMessage = error.response?.data?.message || error.message || "Ocorreu um erro desconhecido.";
                setError(errorMessage);
                
            });
    }
    
    function post(url: string, data: unknown) {
        
        axios.post(`${API_URL}/${url}`, data, {
            withCredentials: true,
        })
            .then(response => {
                setData(response.data);
                
            }).catch(error => {
                const errorMessage = error.response?.data?.message || error.message || "Ocorreu um erro desconhecido.";
                setError(errorMessage);
                
            });
    }

    return {
        data,
        error,
        get,
        post
    }
}