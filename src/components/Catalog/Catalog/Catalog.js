import CatalogItem from "../CatalogItem/CatalogItem";
import { useEffect, useState } from "react";
import * as carService from "../../../services/carService";


const Catalog = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            });
    }, []);
    return (
        <section className="myCars">
            <div className="cars">
                <h2>МОИТЕ АВТОМОБИЛИ</h2>

                <a href="/create" className="newCar">
                    Добави
                </a>
                {cars.length > 0
                    ? cars.map(x => <CatalogItem key={x._id} car={x} />)
                    : <h3 className="noCars">Няма намерени автомобили</h3>
                }
            </div>
        </section>
    )
}

export default Catalog;