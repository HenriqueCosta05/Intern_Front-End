import { createContext } from "react";
import { useAuth } from "../hooks";

interface AuthContextProps {
    children: React.ReactNode;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthContextProps) => {
    const auth = useAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
    }

export default AuthContext;

