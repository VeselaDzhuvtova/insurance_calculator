import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { CarContext } from "../../contexts/carContext";
import * as carService from "../../services/carService";
const Edit = () => {
    const [currentCar, setCurrentCar] = useState({});
    const { carEdit } = useContext(CarContext);
    const { carId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        carService.getOne(carId)
        .then(carData => {
            setCurrentCar(carData);
        });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.target));
        
        carService.edit(carId, carData)
        .then(result => {
            carEdit(carId, result)
            navigate(`/catalog/${carId}`)
        });
    };


    return (
        <div className="text-center" >
            <form id='create' method="POST" onSubmit = {onSubmit}>
                <div className="form-group">
                    <h3>Промени данните на автомобила</h3>
                    <label htmlFor="marka"></label>
                    <input
                        type="text"
                        id="marka"
                        name="marka"
                        placeholder="Марка"
                        defaultValue={currentCar.marka}
                    />
                    <label htmlFor="model"></label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Модел"
                        defaultValue={currentCar.model}
                    />
                    <label htmlFor="number"></label>
                    <input type="text"
                        id="number"
                        name="number"
                        placeholder="ДКН"
                    />
                    <label htmlFor="docum"></label>
                    <input
                        type="text" id="docum"
                        name="docum"
                        placeholder="СРМПС"
                        defaultValue={currentCar.docum}
                    />
                    <label htmlFor="vin"></label>
                    <input
                        type="text"
                        id="vin"
                        name="vin"
                        placeholder="Номер на рама"
                        defaultValue={currentCar.vin}
                    />
                    <label htmlFor="registration"></label>
                    <input
                        type="text"
                        id="registration"
                        name="registration"
                        placeholder="Дата на първа регистрация"
                        defaultValue={currentCar.registration}
                    />
                    <label htmlFor="firstName"></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Име"
                        defaultValue={currentCar.firstName}
                    />
                    <label htmlFor="lastName"></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Фамилия"
                        defaultValue={currentCar.lastName}
                    />
                    <Link to={`/catalog/${currentCar._id}`} className="btn-Save">
                        Запази
                    </Link>
                </div>
            </form>
        </div >
    );
};

export default Edit;