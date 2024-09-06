import axios from "axios";
import { useState } from "react";

export default function useFetch() {
    const API_URL = "http://localhost:3000"

    const [data, setData] = useState<unknown>([]);
    const [errors, setErrors] = useState<string[]>([]);

    function get(url: string) {
        
        axios.get(`${API_URL}/${url}`)
            .then(response => {
                setData(response.data);
                
            }).catch(error => {
                const errorMessage = error.response?.data?.message || error.message || "Ocorreu um erro desconhecido.";
                setErrors([errorMessage]);
                
            });
    }
    
    function post(url: string, data: unknown) {
        
        axios.post(`${API_URL}/${url}`, data)
            .then(response => {
                setData(response.data);
                
            }).catch(error => {
                const errorMessage = error.response?.data?.message || error.message || "Ocorreu um erro desconhecido.";
                setErrors([errorMessage]);
                
            });
    }

    return {
        data,
        errors,
        get,
        post
    }
}