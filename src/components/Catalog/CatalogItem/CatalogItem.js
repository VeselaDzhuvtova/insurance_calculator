import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as carService from "../../../services/carService"
import { useContext } from "react";
import { CarContext } from "../../../contexts/CarContext";

const CatalogItem = ({ car }) => {
    const { carId } = useParams();
    const navigate = useNavigate();
    // const { removeCar } = useContext(CarContext);

    const removeCar = (carId) => {
        const info = window.confirm('Желаете ли да изтриете автомобила от списъка?')

        if (info) {
            carService.remove(carId)
                .then(() => {
                    removeCar(carId);
                    navigate('/catalog');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <section id="add-car">
            <h2>Автомобил:</h2>
            <div className="allCars">
                <div className="allCars-info">
                    <h3>{car.marka}</h3>
                    <h3>{car.model}</h3>
                    <h3>{car.number}</h3>

                    <Link to={`/catalog/${car._id}`} className="editDelBtn">
                        Детайли
                    </Link>
                    <Link to={`/catalog/${car._id}/edit`} className="editDelBtn">
                        Промени
                    </Link>
                    <button onClick={() => removeCar(car._id)} className="delBtn">
                        Изтрий
                    </button>
                </div>
            </div>
        </section>
    )
}


export default CatalogItem;