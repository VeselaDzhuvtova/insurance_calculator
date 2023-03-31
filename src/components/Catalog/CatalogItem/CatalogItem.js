import { Link } from "react-router-dom";
import * as carService from "../../../services/carService";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const carDeleteHandler = () => {
    const { carId } = useParams();
    const info = window.confirm('Премахване на автомобила от списъка?')
    const navigate = useNavigate();
    if (info) {

        carService.remove(carId)
        .then(() => {
            navigate('/catalog')
        })
    }
}
const CatalogItem = ({ car }) => {
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
                    <button onClick={carDeleteHandler} className="editDelBtn">
                        Изтрий
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CatalogItem;