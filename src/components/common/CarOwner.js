import { useParams, Navigate, Outlet } from "react-router-dom";
import { useCarContext } from "../../contexts/CarContext";
import { useAuthContext } from "../../contexts/AuthContext";


export const CarOwner = () => {
    const { carId } = useParams();
    const { getCar } = useCarContext();
    const { userId } = useAuthContext();

    const currentCar = getCar(carId);

    if (currentCar && currentCar._ownerId !== userId) {
        return <Navigate to={`/catalog/${carId}`} />
    }
    // return children ? children :  <Outlet />
};