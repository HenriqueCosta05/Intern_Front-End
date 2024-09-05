import { useState } from "react";
import { User } from "../@types";
import axios from "axios";

export default function useAuth() {
    const API_URL = "http://localhost:3000"

    const [user, setUser] = useState<User | null>(null);
    const [errors, setErrors] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    function login(email: string, password: string, onSuccess: () => void) {
        setIsLoading(true);
        axios.post(`${API_URL}/auth/login`, {
            email,
            password
        }).then(response => {
            console.log(response);
            if (response.status === 200) {
                setUser(response.data.access_token);
                onSuccess(); 
            } else {
                setErrors(["Login failed. Please try again."]);
            }
            setIsLoading(false);
        }).catch(error => {
            const errorMessage = error.response?.data?.message || error.message || "Ocorreu um erro desconhecido.";
            setErrors([errorMessage]);
            setIsLoading(false);
        });
    }

    function logout() {
        setUser(null);
    }

    function register(user: User, onSuccess: () => void) {
        setIsLoading(true);
        axios.post(`${API_URL}/auth/register`, user).then(response => {
            if(response.status === 201) {
            setUser(response.data.access_token); 
            setIsLoading(false);
            onSuccess();
            } else {
                setErrors(["Cadastro falhou, favor tentar novamente em instantes..."]);
                setIsLoading(false);
            }
        }).catch(error => {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors); 
            } else {
                setErrors([error.response.data.message]);
            }
            setIsLoading(false);
        });
    }

    return {
        user,
        errors,
        isLoading,
        login,
        logout,
        register
    }
}