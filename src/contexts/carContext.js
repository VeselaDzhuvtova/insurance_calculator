import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as carService from "../services/carService";

export const CarContext = createContext();// 29.07 

export const CarProvider = ({ // 29.07 
    children,// 29.07 
}) => {// 29.07 
    const [cars, setCars] = useState([]);// 29.07 
    const navigate = useNavigate();// 29.07 

    useEffect(() => {// 29.07 
        carService.getAll()// 29.07 
            .then(result => {// 29.07 
                setCars(result);// 29.07 
            });// 29.07 
    }, []);// 29.07 

    //     // const selectCar = (carId) => {
    //     //     return cars.find(x => x._id === carId) || {};
    //     // }

    //     // const fetchCarDetails = (carId, carDetails) => {
    //     //     setCars({
    //     //         type: 'FETCH_CAR_DETAILS',
    //     //         payload: carDetails,
    //     //         carId,
    //     //     });
    //     // };


    const addCar = (carData) => {// 29.07 
        setCars(state => [// 29.07 
            ...state,// 29.07 
            carData,// 29.07 
        ]);// 29.07 

        navigate('/catalog');
    };// 29.07 

    const editCar = (carId, carData) => {// 29.07 
        setCars(state => state.map(x => x._id === carId ? carData : x));// 29.07 
    };// 29.07 

    const removeCar = (carData, carId) => {// 29.07 
        setCars(state => [// 29.07 
            ...state,// 29.07 
        ]);// 29.07 
    };// 29.07 

    return ( // 29.07 
        <CarContext.Provider value={{// 29.07 
            cars,// 29.07 
            addCar,// 29.07 
            editCar,// 29.07 
            // fetchCarDetails,
            // selectCar,
            removeCar,// 29.07 
        }}>// 29.07
            {children}// 29.07
        </CarContext.Provider>// 29.07 
    );// 29.07 
};// 29.07 

