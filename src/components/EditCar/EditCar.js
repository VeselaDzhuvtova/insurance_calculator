import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../services/useService";
import { carServiceFactory } from "../../services/carService";
import { useCarContext } from "../../contexts/CarContext";

export const EditCar = () => {
    const { onCarEditSubmit } = useCarContext();
    const { carId } = useParams();
    const carService = useService(carServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        marka: '',
        model: '',
        number: '',
        docum: '',
        vin: '',
        registration: '',
        firstName: '',
        lastName: '',
    }, onCarEditSubmit);

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                changeValues(result);
            });
    }, [carId]);

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
                        value={values.marka}
                        onChange={changeHandler}
                    />
                    <label htmlFor="model"></label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Модел"
                        defaultValue={values.model}
                        onChange={changeHandler}
                    />
                    <label htmlFor="number"></label>
                    <input type="text"
                        id="number"
                        name="number"
                        placeholder="ДКН"
                        defaultValue={values.number}
                        onChange={changeHandler}
                    />
                    <label htmlFor="docum"></label>
                    <input
                        type="text" id="docum"
                        name="docum"
                        placeholder="СРМПС"
                        defaultValue={values.docum}
                        onChange={changeHandler}
                    />
                    <label htmlFor="vin"></label>
                    <input
                        type="text"
                        id="vin"
                        name="vin"
                        placeholder="Номер на рама"
                        defaultValue={values.vin}
                        onChange={changeHandler}
                    />
                    <label htmlFor="registration"></label>
                    <input
                        type="text"
                        id="registration"
                        name="registration"
                        placeholder="Дата на първа регистрация"
                        defaultValue={values.registration}
                        onChange={changeHandler}
                    />
                    <label htmlFor="firstName"></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Име"
                        defaultValue={values.firstName}
                        onChange={changeHandler}
                    />
                    <label htmlFor="lastName"></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Фамилия"
                        defaultValue={values.lastName}
                        onChange={changeHandler}
                    />
                    <Link to={`/catalog/${car._id}/edit`} className="editDelBtn">
                        Промени
                    </Link>
                    <button className="delBtn">
                        Изтрий
                    </button>
                    <button type="submit" className="btn-Save">
                        Запази
                    </button>
                </div>
            </form>
        </div >
    );
}

// export const EditCar = () => {
//     const [currentCar, setCurrentCar] = useState({});
//     const { editCar, getOne } = useContext(CarContext);
//     const { carId } = useParams();
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         marka: currentCar.marka || '',
//         model: currentCar.model || '',
//         number: '',
//         docum: currentCar.docum || '',
//         vin: currentCar.vin || '',
//         registration: currentCar.registration || '',
//         firstName: currentCar.firstName || '',
//         lastName: currentCar.lastName || '',
//     });

//     useEffect(() => {
//         carService.getOne(carId)
//             .then(carData => {
//                 setCurrentCar(carData);
//             })
//     }, [carId, getOne]);

//     const onChange = (e) => {
//         setCurrentCar({
//             ...currentCar,
//             [e.target.name]: e.target.value
//         });
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();
//         // const carData = Object.fromEntries(new FormData(e.target));

//         carService.edit(carId, formData)
//             .then(result => {
//                 editCar(carId, result)
//                 navigate(`/catalog/${carId}`)
//             });
//     };


//     return (
//         <div className="text-center" >
//             <form id='create' method="POST" onSubmit={onSubmit}>
//                 <div className="form-group">
//                     <h3>Промени данните на автомобила</h3>
//                     <label htmlFor="marka"></label>
//                     <input
//                         type="text"
//                         id="marka"
//                         name="marka"
//                         placeholder="Марка"
//                         defaultValue={formData.marka || ''}
//                         onChange={onChange}
//                     />
//                     <label htmlFor="model"></label>
//                     <input
//                         type="text"
//                         id="model"
//                         name="model"
//                         placeholder="Модел"
//                         defaultValue={formData.model || ''}
//                         onChange={onChange}
//                     />
//                     <label htmlFor="number"></label>
//                     <input type="text"
//                         id="number"
//                         name="number"
//                         placeholder="ДКН"
//                         defaultValue={formData.number || ''}
//                         onChange={onChange}
//                     />
//                     <label htmlFor="docum"></label>
//                     <input
//                         type="text" id="docum"
//                         name="docum"
//                         placeholder="СРМПС"
//                         defaultValue={formData.docum || ''}
//                         onChange={onChange}
//                     />
//                     <label htmlFor="vin"></label>
//                     <input
//                         type="text"
//                         id="vin"
//                         name="vin"
//                         placeholder="Номер на рама"
//                         defaultValue={formData.vin || ''}
//                         onChange={onChange}
//                     />
//                     <label htmlFor="registration"></label>
//                     <input
//                         type="text"
//                         id="registration"
//                         name="registration"
//                         placeholder="Дата на първа регистрация"
//                         defaultValue={formData.registration || ''}
//                         onChange={onChange}
//                     />
//                     <label htmlFor="firstName"></label>
//                     <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         placeholder="Име"
//                         defaultValue={formData.firstName || ''}
//                         onChange={onChange}
//                     />
//                     <label htmlFor="lastName"></label>
//                     <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         placeholder="Фамилия"
//                         defaultValue={formData.lastName || ''}
//                         onChange={onChange}
//                     />
//                     <button type="submit" className="btn-Save">
//                         Запази
//                     </button>
//                 </div>
//             </form>
//         </div >
//     );
// };

// export default Edit;