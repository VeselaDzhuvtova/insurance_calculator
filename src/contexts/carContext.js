import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as carService from "../services/carService";

export const CarContext = createContext();

const carReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARS':
            return [...action.payload];
        case 'ADD_CAR':
            return [...state, action.payload];
        case 'EDIT_CAR':
        case 'FETCH_CAR_DETAILS':
            return state.map(x => x._id === action.carId ? action.payload : x);
        case 'REMOVE_CAR':
            return state.filter(x => x._id !== action.carId);
        default:
            return state;
    }
};

export const CarProvider = ({
    children,
}) => {
    const [cars, carDispatch] = useReducer(carReducer, []);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_CARS',
                    payload: result
                };
                carDispatch(action);
            });
    }, []);

    const selectCar = (carId) => {
        return cars.find(x => x._id === carId);
    }

    const fetchCarDetails = (carId, carDetails) => {
        carDispatch({
            type: 'FETCH_CAR_DETAILS',
            payload: carDetails,
            carId,
        })
    }


    const addCar = (carData) => {
        carDispatch({
            type: 'ADD_CAR',
            payload: carData,
        })

        navigate('/catalog');
    };

    const editCar = (carId, carData) => {
        carDispatch({
            type: 'EDIT_GAME',
            payload: carData,
            carId,
        });
    }

    const removeCar = (carId, carData) => {
        carDispatch({
            type: 'REMOVE_CAR',
            payload: carData,
            carId,
        });

        return (
            <CarContext.Provider value={{ cars, addCar, editCar, fetchCarDetails, selectCar, removeCar }}>
                {children}
            </CarContext.Provider>
        );
    };
};
