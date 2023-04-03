import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CarContext } from '../../contexts/CarContext';
import * as carService from "../../services/carService";
import { useState } from 'react';

export const Details = ({}) => {// 29.07 
//     // const { fetchCarDetails, selectCar } = useContext(CarContext);
    const { carId } = useParams();// 29.07 
    const [ currentCar, setCurrentCar ] = useState({});// 29.07 

//     // const currentCar = selectCar(carId);
    useEffect(() => { // 29.07
        carService.getOne(carId) // 29.07
        .then(result => { // 29.07
            setCurrentCar(carId, result) // 29.07
        }); // 29.07
    }); // 29.07
//     // const car = cars.find(x => x._id == carId);


    return (
        <section id="add-car">
            <h2>Автомобил:</h2>
            <div className="allCars">
                <div className="allCars-info">
                    <h3>Марка: {currentCar.marka}</h3>
                    <h3>Модел: {currentCar.model}</h3>
                    <h3>ДКН: {currentCar.number}</h3>
                    <h3>СРМПС: {currentCar.docum}</h3>
                    <h3>VIN: {currentCar.vin}</h3>
                    <h3>Дата на първа регистрация: {currentCar.registration}</h3>
                    <h3>Собственик: {`${currentCar.firstName} ${currentCar.lastName}`}</h3>
                    <h3></h3>
                    <Link to={`/catalog/${currentCar._id}/edit`} className="editDelBtn">
                        Промени
                    </Link>

                    <Link to="/catalog" className="editDelBtn">
                        Назад
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Details;