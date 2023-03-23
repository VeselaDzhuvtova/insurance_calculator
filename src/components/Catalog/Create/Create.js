import { useState } from 'react';


export const Create = ({
    onCreateCarSubmit,
}) => {
    const [values, setValues] = useState({
        marka: '',
        model: '',
        number: '',
        docum: '',
    })

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateCarSubmit(values)
    };

    return (
        <div className="text-center" onSubmit={onSubmit}>
            <div className="form-group">
                <h3>Добави автомобил</h3>
                <label htmlFor="marka">Марка</label>
                <input
                    defaultValue={values.marka}
                    onChange={onChangeHandler}
                    type="text"
                    id="marka"
                    name="marka"
                    placeholder="Марка"
                />
                <label htmlFor="model">Модел</label>
                <input
                    defaultValue={values.model}
                    onChange={onChangeHandler}
                    type="text"
                    id="model"
                    name="model"
                    placeholder="Модел"
                />
                <label htmlFor="number">ДКН</label>
                <input type="text" defaultValue={values.number}
                    onChange={onChangeHandler} id="number" name="number" placeholder="ДКН" />
                <label htmlFor="docum">СРМПС</label>
                <input defaultValue={values.docum}
                    onChange={onChangeHandler} type="text" id="docum" name="docum" placeholder="СРМПС" />
            </div>

            <button type="submit" className="btn-myCars">
                Submit
            </button>
        </div>

    );
};

export default Create;