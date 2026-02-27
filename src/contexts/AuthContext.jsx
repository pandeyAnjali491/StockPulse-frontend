import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

const client = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || `http://localhost:8000`,
    withCredentials: true,
})

export const AuthProvider = ({ children }) => {

    const router = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // initialize auth from localStorage token presence
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setIsAuthenticated(true);
    }, []);

    const handleRegister = async (name, username, password) => {
        try {
            // backend expects /signup at root
            let request = await client.post("/auth/signup", {
                name: name,
                username: username,
                password: password
            })


            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            throw err;
        }
    }

    const handleLogin = async (username, password) => {
        try {
            let request = await client.post("/auth/login", {
                username: username,
                password: password
            });

            if (request.status === httpStatus.OK || request.status === httpStatus.CREATED) {
                // if server returns a token set it
                if (request.data?.token) localStorage.setItem("token", request.data.token);
                setIsAuthenticated(true);
                setUser(request.data?.user || username);
                router("/dashboard");
                return request.data;
            }
            return request.data;
        } catch (err) {
            throw err;
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
        router("/");
    }


    const data = {
        handleRegister,
        handleLogin,
        handleLogout,
        isAuthenticated,
        user,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}
