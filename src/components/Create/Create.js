import { useState } from 'react';


export const Create = ({
    onCreateCarSubmit,
}) => {
    const [values, setValues] = useState({
        marka: '',
        model: '',
        number: '',
        docum: '',
        vin: '',
        registration: '',
        firstName: '',
        secondName: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateCarSubmit(values);
    };

    return (
        <div className="text-center">
            <form id='create' method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <h3>Добави автомобил</h3>
                    <label htmlFor="marka"></label>
                    <input
                        value={values.marka}
                        onChange={onChangeHandler}
                        type="text"
                        id="marka"
                        name="marka"
                        placeholder="Марка"
                    />
                    <label htmlFor="model"></label>
                    <input
                        value={values.model}
                        onChange={onChangeHandler}
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Модел"
                    />
                    <label htmlFor="number"></label>
                    <input type="text"
                        value={values.number}
                        onChange={onChangeHandler}
                        id="number" 
                        name="number"
                        placeholder="ДКН"
                    />
                    <label htmlFor="docum"></label>
                    <input value={values.docum}
                        onChange={onChangeHandler}
                        type="text" id="docum"
                        name="docum"
                        placeholder="СРМПС"
                    />
                    <label htmlFor="vin"></label>
                    <input
                        value={values.vin}
                        onChange={onChangeHandler}
                        type="text"
                        id="vin"
                        name="vin"
                        placeholder="Номер на рама"
                    />
                    <label htmlFor="registration"></label>
                    <input
                        value={values.registration}
                        onChange={onChangeHandler}
                        type="text"
                        id="registration"
                        name="registration"
                        placeholder="Дата на първа регистрация"
                    />
                    <label htmlFor="firstName"></label>
                    <input
                        value={values.firstName}
                        onChange={onChangeHandler}
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Име"
                    />
                    <label htmlFor="secondName"></label>
                    <input
                        value={values.secondName}
                        onChange={onChangeHandler}
                        type="text"
                        id="secondName"
                        name="secondName"
                        placeholder="Фамилия"
                    />
                    <input type="submit" className="btn-myCars" value="Добави" />
                </div>
            </form>
        </div>
    );
};

export default Create;