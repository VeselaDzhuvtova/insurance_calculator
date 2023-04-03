import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Logout = () => {// 29.07 
    const navigate = useNavigate();// 29.07 
    const { user, userLogout } = useContext(AuthContext);// 29.07 

    useEffect(() => {// 29.07 
        authService.logout(user.accessToken)// 29.07 
            .then(() => {// 29.07 
                userLogout();// 29.07 
                navigate('/')// 29.07 
            })// 29.07 
            .catch(() => {// 29.07 
                navigate('/')// 29.07 
            })// 29.07 
    });// 29.07 

    return null;// 29.07 
}
export default Logout;