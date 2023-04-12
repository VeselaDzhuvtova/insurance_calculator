import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log('Грешно потребителско име или парола')
        }
    };

    const onRegisterSubmit =async (values) => {
        const { repeatPassword, ...registerData } = values;
        if (repeatPassword !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/')
        } catch (error) {
            console.log('Паролата е различна!')
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}
// import { createContext } from "react";

// export const AuthContext = createContext();

// // export const AuthProvider = ({
// //     children,
// // }) => {
//     // const [auth, setAuth] = useLocalStorage('auth', {});



//     // return (
//     // // <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
//     // //     {children}
//     // // </AuthContext.Provider>
//     // );
// // };



// // export const useAuthContext = () => {
// //     const context = useContext(AuthContext);

// //     return context;
// // }

// // Всичко е от  29.07