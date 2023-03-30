import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Details = ({ cars }) => {
    const { carId } = useParams();
    
    const car = cars.find(x => x._id == carId);

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
                    <h3></h3>
                    <Link to={`/catalog/${car._id}/edit`} className="editDelBtn">
                        Промени
                    </Link>
                    <Link to="#" className="editDelBtn">
                        Изтрий
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