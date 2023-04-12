import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useService } from "../../services/useService";
import { carServiceFactory } from "../../services/carService";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export const CarDetails = () => {
    const { userId } = useContext(AuthContext);
    const { carId } = useParams();
    const [car, setCar] = useState({});
    const carService = useService(carServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            })
    }, [carId]);

    const isOwner = car._ownerId === userId;

    const onDeleteClick = async () => {
        //eslint-disable-next-line no-restricted-globals
        const result = confirm(`Желаете ли да изтриете от списъка автомобил с ДКН ${car.number}?`);
        if(result) {
            await carService.delete(car._id);

            navigate('/catalog');
        }



        
    };
    return (
        <section id="add-car">
            <h2>Автомобил:</h2>
            <div className="allCars">
                <div className="allCars-info">
                    <h3>Марка: {car.marka}</h3>
                    <h3>Модел: {car.model}</h3>
                    <h3>ДКН: {car.number}</h3>
                    <h3>СРМПС: {car.docum}</h3>
                    <h3>VIN: {car.vin}</h3>
                    <h3>Дата на първа регистрация: {car.registration}</h3>
                    <h3>Собственик: {`${car.firstName} ${car.lastName}`}</h3>

                    {isOwner && (
                        <button className="editDelBtn" onClick={onDeleteClick}>Изтрий</button>
                    )}
                    <Link to={`/catalog/${carId}/edit`} className="editDelBtn">
                        Промени
                    </Link>

                    <Link to="/catalog" className="editDelBtn">
                        Назад
                    </Link>
                </div>
            </div>
        </section>
    );
}



// import { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import * as carService from "../../services/carService";
// import { useState } from 'react';
// import { CarContext } from '../../contexts/CarContext';


// export const Details = () => {
//     const { cars } = useContext(CarContext)
//     const { carId } = useParams();
//     const [currentCar, setCurrentCar] = useState({});

//     useEffect(() => {
//         carService.getOne(carId)
//             .then(result => {
//                 setCurrentCar(result)
//             });
//     }, []);
//     // const car = cars.find(x => x._id == carId);

//     return (
//         <section id="add-car">
//             <h2>Автомобил:</h2>
//             <div className="allCars">
//                 <div className="allCars-info">
//                     <h3>Марка: {currentCar.marka}</h3>
//                     <h3>Модел: {currentCar.model}</h3>
//                     <h3>ДКН: {currentCar.number}</h3>
//                     <h3>СРМПС: {currentCar.docum}</h3>
//                     <h3>VIN: {currentCar.vin}</h3>
//                     <h3>Дата на първа регистрация: {currentCar.registration}</h3>
//                     <h3>Собственик: {`${currentCar.firstName} ${currentCar.lastName}`}</h3>
//                     <Link to={`/catalog/${carId}/edit`} className="editDelBtn">
//                         Промени
//                     </Link>

//                     <Link to="/catalog" className="editDelBtn">
//                         Назад
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Details;