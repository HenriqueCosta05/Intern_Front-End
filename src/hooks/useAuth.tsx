import { useState } from "react";
import { User } from "../@types";
import axios from "axios";

export default function useAuth() {
    const API_URL = "http://localhost:3000"

    const [user, setUser] = useState<User | null>(null);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function login(email: string, password: string) {
        setIsLoading(true);
        axios.post(`${API_URL}/auth/login`, {
            email,
            password
        }).then(response => {
            console.log(response)
            setUser(response.data.user); // A confirmar detalhes de integração
            setIsLoading(false);
        }).catch(error => {
          setErrors(error.response.data.errors); // A confirmar detalhes de integração
          setIsLoading(false);
        })
    }

    function logout() {
        setUser(null);
    }

    function register(user: User) {
        setIsLoading(true);
        axios.post(`${API_URL}/auth/register`, user).then(response => {
            setUser(response.data.user); // A confirmar detalhes de integração
            setIsLoading(false);
        }).catch(error => {
          setErrors(error.response.data.errors); // A confirmar detalhes de integração
          setIsLoading(false);
        })
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