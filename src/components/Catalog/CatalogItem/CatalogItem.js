import { Link } from "react-router-dom";

const CatalogItem = ({
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
                    <h3>{marka}</h3>
                    <h3>{model}</h3>
                    <h3>{number}</h3>

                    <Link to={`/catalog/${_id}`} className="editDelBtn">
                        Детайли
                    </Link>
                    <a href="#" className="editDelBtn">
                        Промени
                    </a>
                    <a href="#" className="editDelBtn">
                        Изтрий
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CatalogItem;