import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/users`;



export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),

        register: (data) => request.post(`${baseUrl}/register`, data),
        
        logout: () => request.get(`${baseUrl}/logout`),
    }
};
// import * as request from "./requester";
// import { setInvalidCredentials } from "./helpers";

// const baseUrl = `http://localhost:3030/users`;

// export const login = (email, password) =>
//     request.post(`${baseUrl}/login`, { email, password }).catch(() => {
//         setInvalidCredentials(); 
//         throw new Error('Грешно потребителско име или парола'); 
//     });

// export const logout = async (accessToken) => {
//     try {
//         const response = await fetch(`${baseUrl}/logout`, {
//             headers: {
//                 'X-Authorization': accessToken
//             }
//         });
        
//         return response;
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const register = (email, password, repeatPassword) => request.post(`${baseUrl}/register`, {email, password, repeatPassword});

