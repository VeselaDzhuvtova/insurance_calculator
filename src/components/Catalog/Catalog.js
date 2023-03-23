const Catalog = () => {
    return (
        <section className="myCars">
            <div className="cars">
                <h2>МОИТЕ АВТОМОБИЛИ</h2>
                <section id="add-car" className="view-section">
                    <p>Автомобили:</p>
                    <div className="loadMyCars">
                        <table>
                            <thead>
                                <tr>
                                    <th>Марка</th>
                                    <th>Модел</th>
                                    <th>ДКН</th>
                                    <th>СРМПС</th>
                                    <th>Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Опел</td>
                                    <td>Астра</td>
                                    <td>Е0000ЕЕ</td>
                                    <td>012345678</td>
                                    <td>
                                        <div className="editDelBtn">
                                            <a href="#" className="editDelBtn">
                                                Edit
                                            </a>
                                            <a href="#" className="editDelBtn">
                                                Delete
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Catalog;