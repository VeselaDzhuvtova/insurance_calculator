import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    marka,
    model,
    number,
}) => {
    return (
        <section id="add-car">
            <h2>Автомобил:</h2>
            <div className="allCars">
                <div className="allCars-info">
                    <h3 className="item-marka">{marka}</h3>
                    <h3 className="item-model">{model}</h3>
                    <h3 className="item-number">{number}</h3>

                    <Link to={`/catalog/${_id}`} className="editDelBtn">
                        Детайли
                    </Link>

                </div>
            </div>
        </section>
    )
}

// export default CatalogItem;



// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import * as carService from "../../../services/carService"


// const CatalogItem = ({ car }) => {
//     const { carId } = useParams();
//     const navigate = useNavigate();
//     // const { removeCar } = useContext(CarContext);

//     const removeCar = (carId) => {
//         const info = window.confirm('Желаете ли да изтриете автомобила от списъка?')
//         console.log(info)
//         if (info) {
//             carService.remove(carId)
//                 .then(() => {
//                     // removeCar(carId);
//                     navigate('/catalog');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         }
//     }

//     return (
//         <section id="add-car">
//             <h2>Автомобил:</h2>
//             <div className="allCars">
//                 <div className="allCars-info">
//                     <h3>{car.marka}</h3>
//                     <h3>{car.model}</h3>
//                     <h3>{car.number}</h3>

//                     <Link to={`/catalog/${car._id}`} className="editDelBtn">
//                         Детайли
//                     </Link>
//                     <Link to={`/catalog/${car._id}/edit`} className="editDelBtn">
//                         Промени
//                     </Link>
//                     <button onClick={() => removeCar(car._id)} className="delBtn">
//                         Изтрий
//                     </button>
//                 </div>
//             </div>
//         </section>
//     )
// }


// export default CatalogItem;