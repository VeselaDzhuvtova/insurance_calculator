import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as carService from '../../services/carService';

export const Details = ({ cars }) => {
    const { carId } = useParams();
    // const [carDetails, setCar] = useState({});
    
    const car = cars.find(x => x._id == carId);

    // useEffect(() => {
    //     carService.getOne(carId)
    //         .then(result => {
    //             setCar(result);
    //         });
    // }, [carId]);

    return (
        <section id="add-car">
            <h2>Автомобил:</h2>
            <div className="allCars">
                <div className="allCars-info">
                    <h3>{car.marka}</h3>
                    <h3>{car.model}</h3>
                    <h3>{car.number}</h3>
                    <h3>{car.docum}</h3>
                    <h3>{car.vin}</h3>
                    <h3>{car.registration}</h3>
                    <h3>{car.firstName}</h3>
                    <h3>{car.secondName}</h3>
                    <a href="#" className="editDelBtn">
                        Промени
                    </a>
                    <a href="#" className="editDelBtn">
                        Изтрий
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Details;