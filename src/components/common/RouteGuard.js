import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const RouteGard = ({
    children
}) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return (
        <>
        {children}
        </>
    );
};