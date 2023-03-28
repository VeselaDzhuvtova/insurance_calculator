import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as carService from '../../services/carService';

export const Details = () => {
    const { carId } = useParams();
    const [carDetails, setCar] = useState({});
    
    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            });
    }, [carId]);

    return (
        <section id="add-car">
            <h2>Автомобил:</h2>
            <div className="allCars">
                <div className="allCars-info">
                    <h3>{carDetails.marka}</h3>
                    <h3>{carDetails.model}</h3>
                    <h3>{carDetails.number}</h3>
                    <h3>{carDetails.docum}</h3>
                    <h3>{carDetails.vin}</h3>
                    <h3>{carDetails.registration}</h3>
                    <h3>{carDetails.firstName}</h3>
                    <h3>{carDetails.secondName}</h3>
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