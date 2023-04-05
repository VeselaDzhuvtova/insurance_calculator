import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CarContext } from "../../contexts/CarContext";
import * as carService from "../../services/carService";

const Edit = () => {
    const [currentCar, setCurrentCar] = useState({});
    const { editCar, getOne } = useContext(CarContext);
    const { carId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        marka: currentCar.marka || '',
        model: currentCar.model || '',
        number: '',
        docum: currentCar.docum || '',
        vin: currentCar.vin || '',
        registration: currentCar.registration || '',
        firstName: currentCar.firstName || '',
        lastName: currentCar.lastName || '',
    });

    useEffect(() => {
        carService.getOne(carId)
            .then(carData => {
                setCurrentCar(carData);
            })
    }, [carId, getOne]);

    const onChange = (e) => {
        setCurrentCar({
            ...currentCar,
            [e.target.name]: e.target.value
        });
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // const carData = Object.fromEntries(new FormData(e.target));

        carService.edit(carId, formData)
            .then(result => {
                editCar(carId, result)
                navigate(`/catalog/${carId}`)
            });
    };


    return (
        <div className="text-center" >
            <form id='create' method="POST" onSubmit={onSubmit}>
                <div className="form-group">
                    <h3>Промени данните на автомобила</h3>
                    <label htmlFor="marka"></label>
                    <input
                        type="text"
                        id="marka"
                        name="marka"
                        placeholder="Марка"
                        defaultValue={formData.marka || ''}
                        onChange={onChange}
                    />
                    <label htmlFor="model"></label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Модел"
                        defaultValue={formData.model || ''}
                        onChange={onChange}
                    />
                    <label htmlFor="number"></label>
                    <input type="text"
                        id="number"
                        name="number"
                        placeholder="ДКН"
                        defaultValue={formData.number || ''}
                        onChange={onChange}
                    />
                    <label htmlFor="docum"></label>
                    <input
                        type="text" id="docum"
                        name="docum"
                        placeholder="СРМПС"
                        defaultValue={formData.docum || ''}
                        onChange={onChange}
                    />
                    <label htmlFor="vin"></label>
                    <input
                        type="text"
                        id="vin"
                        name="vin"
                        placeholder="Номер на рама"
                        defaultValue={formData.vin || ''}
                        onChange={onChange}
                    />
                    <label htmlFor="registration"></label>
                    <input
                        type="text"
                        id="registration"
                        name="registration"
                        placeholder="Дата на първа регистрация"
                        defaultValue={formData.registration || ''}
                        onChange={onChange}
                    />
                    <label htmlFor="firstName"></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Име"
                        defaultValue={formData.firstName || ''}
                        onChange={onChange}
                    />
                    <label htmlFor="lastName"></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Фамилия"
                        defaultValue={formData.lastName || ''}
                        onChange={onChange}
                    />
                    <button type="submit" className="btn-Save">
                        Запази
                    </button>
                </div>
            </form>
        </div >
    );
};

export default Edit;