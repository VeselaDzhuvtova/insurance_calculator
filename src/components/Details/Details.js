import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CarContext } from '../../contexts/CarContext';
import * as carService from "../../services/carService";


export const Details = ({}) => {
    const { fetchCarDetails, selectCar } = useContext(CarContext);
    const { carId } = useParams();

    const currentCar = selectCar(carId);
    useEffect(() => {
        carService.getOne(carId)
        .then(result => {
            fetchCarDetails(carId, result)
        });
    });
    // const car = cars.find(x => x._id == carId);

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