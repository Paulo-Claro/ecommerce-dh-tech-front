import { useContext, useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [ loading, setLoading] = useState(null);
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token');
    });

    useEffect(() => {
        setToken(() => {
            return localStorage.getItem('token');
        })
    }, [token])

    const login = async (data) => {
        const { email, password } = data;
        setLoading(true);
        try {
            const { data } = await api.post('/user/login', { email, password });
            localStorage.setItem('token', data);
            localStorage.setItem('idUser', (JSON.parse(atob(data.split('.')[1])).id));
            setToken(data);
        } catch (e) {
            toast('Email ou senha inválido', { type: 'error' })
        }finally{
            setLoading(false);
        }
    }
    

    const logout = () => {
        localStorage.clear();
        setToken(false);
    }

    return (
        <AuthContext.Provider value={{ token, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);