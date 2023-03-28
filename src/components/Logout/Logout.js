import { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/authContext'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const { onLogout } = useContext(AuthContext);

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/"/>
};

export default Logout;