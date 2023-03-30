import { Link } from "react-router-dom";

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
                    <a href="#" className="editDelBtn">
                        Изтрий
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CatalogItem;