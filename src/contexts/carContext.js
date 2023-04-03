import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as carService from "../services/carService";

export const CarContext = createContext();

// const carReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_CARS':
//             return [...action.payload];
//         case 'ADD_CAR':
//             return [...state, action.payload];
//         case 'EDIT_CAR':
//         case 'FETCH_CAR_DETAILS':
//             return state.map(x => x._id === action.carId ? action.payload : x);
//         case 'REMOVE_CAR':
//             return state.filter(x => x._id !== action.carId);
//         default:
//             return state;
//     }
// };

export const CarProvider = ({
    children,
}) => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            });
    }, []);

    // const selectCar = (carId) => {
    //     return cars.find(x => x._id === carId) || {};
    // }

    // const fetchCarDetails = (carId, carDetails) => {
    //     setCars({
    //         type: 'FETCH_CAR_DETAILS',
    //         payload: carDetails,
    //         carId,
    //     });
    // };


    const addCar = (carData) => {
        setCars(state => [
            ...state,
            carData,
        ])

        navigate('/catalog');
    };

    const editCar = (carId, carData) => {
        setCars(state => state.map(x => x._id === carId ? carData : x));
    };

    const removeCar = (carData, carId) => {
        setCars(state => [
            ...state,
        ]);
    };

    return (
        <CarContext.Provider value={{
            cars,
            addCar,
            editCar,
            // fetchCarDetails,
            // selectCar,
            removeCar,
        }}>
            {children}
        </CarContext.Provider>
    );
};

