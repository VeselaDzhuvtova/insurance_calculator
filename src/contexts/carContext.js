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
                return state.map(x => x._id === action.carId ? action.payload : x);
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


    return (
        <CarContext.Provider value={{ cars, addCarHandler: addCar, carEdit: editCar }}>
            {children}
        </CarContext.Provider>
    );
};

