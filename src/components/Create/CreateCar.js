import { useCarContext } from "../../contexts/CarContext";
import { useForm } from '../../hooks/useForm';

export const CreateCar = () => {
    const {onCreateCarSubmit}  = useCarContext();
    const { values, changeHandler, onSubmit } = useForm({
        marka: '',
        model: '',
        number: '',
        docum: '',
        vin: '',
        registration: '',
        firstName: '',
        lastName: '',
    }, onCreateCarSubmit);

    return (
        <div className="text-center" >
            <form id='create' method="POST" onSubmit={onSubmit}>
                <div className="form-group">
                    <h3>Добави автомобил</h3>
                    <label htmlFor="marka"></label>
                    <input
                        value={values.marka}
                        onChange={changeHandler}
                        type="text"
                        id="marka"
                        name="marka"
                        placeholder="Марка"
                    />
                    <label htmlFor="model"></label>
                    <input
                        value={values.model}
                        onChange={changeHandler}
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Модел"
                    />
                    <label htmlFor="number"></label>
                    <input type="text"
                        value={values.number}
                        onChange={changeHandler}
                        id="number"
                        name="number"
                        placeholder="ДКН"
                    />
                    <label htmlFor="docum"></label>
                    <input
                        value={values.docum}
                        onChange={changeHandler}
                        type="text" id="docum"
                        name="docum"
                        placeholder="СРМПС"
                    />
                    <label htmlFor="vin"></label>
                    <input
                        value={values.vin}
                        onChange={changeHandler}
                        type="text"
                        id="vin"
                        name="vin"
                        placeholder="Номер на рама"
                    />
                    <label htmlFor="registration"></label>
                    <input
                        value={values.registration}
                        onChange={changeHandler}
                        type="text"
                        id="registration"
                        name="registration"
                        placeholder="Дата на първа регистрация"
                    />
                    <label htmlFor="firstName"></label>
                    <input
                        value={values.firstName}
                        onChange={changeHandler}
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Име"
                    />
                    <label htmlFor="lastName"></label>
                    <input
                        value={values.lastName}
                        onChange={changeHandler}
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Фамилия"
                    />
                    <input type="submit" className="btn-myCars" value="Добави" />
                </div>
            </form>
        </div >
    );
}
// import * as carService from '../../services/carService';
// import { CarContext } from '../../contexts/CarContext';
// import { useContext } from 'react';

// const Create = () => {
//     const { addCar } = useContext(CarContext);
    
//     const onSubmit = (e) => {
//         e.preventDefault();

//         const carData = Object.fromEntries(new FormData(e.target));
        
//         carService.create(carData)
//         .then(result => {
//             addCar(result)
//         });
//     };

//     return (
//         <div className="text-center" >
//             <form id='create' method="POST" onSubmit={onSubmit}>
//                 <div className="form-group">
//                     <h3>Добави автомобил</h3>
//                     <label htmlFor="marka"></label>
//                     <input
//                         // value={values.marka ?? ''}
//                         // onChange={onChangeHandler}
//                         type="text"
//                         id="marka"
//                         name="marka"
//                         placeholder="Марка"
//                     />
//                     <label htmlFor="model"></label>
//                     <input
//                         // value={values.model ?? ''}
//                         // onChange={onChangeHandler}
//                         type="text"
//                         id="model"
//                         name="model"
//                         placeholder="Модел"
//                     />
//                     <label htmlFor="number"></label>
//                     <input type="text"
//                         // value={values.number ?? ''}
//                         // onChange={onChangeHandler}
//                         id="number"
//                         name="number"
//                         placeholder="ДКН"
//                     />
//                     <label htmlFor="docum"></label>
//                     <input
//                         // value={values.docum ?? ''}
//                         // onChange={onChangeHandler}
//                         type="text" id="docum"
//                         name="docum"
//                         placeholder="СРМПС"
//                     />
//                     <label htmlFor="vin"></label>
//                     <input
//                         // value={values.vin ?? ''}
//                         // onChange={onChangeHandler}
//                         type="text"
//                         id="vin"
//                         name="vin"
//                         placeholder="Номер на рама"
//                     />
//                     <label htmlFor="registration"></label>
//                     <input
//                         // value={values.registration ?? ''}
//                         // onChange={onChangeHandler}
//                         type="text"
//                         id="registration"
//                         name="registration"
//                         placeholder="Дата на първа регистрация"
//                     />
//                     <label htmlFor="firstName"></label>
//                     <input
//                         // value={values.firstName ?? ''}
//                         // onChange={onChangeHandler}
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         placeholder="Име"
//                     />
//                     <label htmlFor="lastName"></label>
//                     <input
//                         // value={values.lastName ?? ''}
//                         // onChange={onChangeHandler}
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         placeholder="Фамилия"
//                     />
//                     <input type="submit" className="btn-myCars" value="Добави" />
//                 </div>
//             </form>
//         </div >
//     );
// };

// export default Create;