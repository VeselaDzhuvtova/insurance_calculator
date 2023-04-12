import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useService } from "../services/useService";

import { carServiceFactory } from '../services/carService';

export const CarContext = createContext();

export const CarProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const carService = carServiceFactory();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result)
            })
    }, []);

    const onCreateCarSubmit = async (data) => {
        const newCar = await carService.create(data);

        setCars(state => [...state, newCar]);

        navigate('/catalog')
    };

    const onCarEditSubmit = async (values) => {
        const result = await carService.edit(values._id, values);

        setCars(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };

    const getCar = (carId) => {
        return cars.find(car => car._id === carId);
    };

    const contextValues = {
        cars,
        onCreateCarSubmit,
        onCarEditSubmit,
        getCar,
    }

    return (
        <CarContext.Provider value={contextValues}>
            {children}
        </CarContext.Provider>
    );
};

export const useCarContext = () => {
    const context = useContext(CarContext);

    return context;
};

// import { createContext } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { useEffect } from "react";
// import * as carService from "../services/carService";


// export const CarContext = createContext({
//     cars: [],
//     addCar: () => {},
//     editCar: () => {},
//     removeCar: () => {},
// });


// export const CarProvider = ({ children }) => {
//     const [cars, setCars] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => { 
//         carService.getAll() 
//             .then(result => { 
//                 setCars(result); 
//             }); 
//     }, []); 

//     const addCar = (carData) => { 
//         setCars(state => [ 
//             ...state, 
//             carData, 
//         ]); 

//         navigate('/catalog');
//     }; 

//     const editCar = (carId, carData) => { 
//         setCars(state => state.map(x => x._id === carId ? carData : x)); 
//     }; 

//     const removeCar = (carId) => { 
//         setCars(state => state.filter((x) => x._id !== carId)); 
//         navigate('/catalog')
//     }; 

//     return (  
//         <CarContext.Provider value={{
//             cars,
//             addCar,
//             editCar,
//             removeCar,
//         }}>
//             {children}
//         </CarContext.Provider>
//     );
// };

// export const CarProvider = ({
//     children,
// }) => {
//     const [cars, setCars] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => { 
//         carService.getAll() 
//             .then(result => { 
//                 setCars(result); 
//             }); 
//     }, []); 

//     const addCar = (carData) => { 
//         setCars(state => [ 
//             ...state, 
//             carData, 
//         ]); 

//         navigate('/catalog');
//     }; 

//     const editCar = (carId, carData) => { 
//         setCars(state => state.map(x => x._id === carId ? carData : x)); 
//     }; 

//     const removeCar = (carId) => { 
//         setCars(state => state.filter((x) => x._id !== carId)); 
//         navigate('/catalog')
//     }; 

//     return (  
//         <CarContext.Provider value={{
//             cars,
//             addCar,
//             editCar,
//             removeCar,
//         }}>
//             {children}
//         </CarContext.Provider>
//     );
// };







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