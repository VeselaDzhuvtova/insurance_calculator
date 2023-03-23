export const CatalogItem = ({
    marka,
    model,
    number,
    docum
}) => {
    return (
        <section id="add-car">
            <h2>Автомобили</h2>
            <div className="allCars">
                <div className="allCars-info">
                    <h3>{marka}</h3>
                    <h3>{model}</h3>
                    <h3>{number}</h3>
                    <h3>{docum}</h3>
                    <a href="#" className="editDelBtn">
                        Добави
                    </a>
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