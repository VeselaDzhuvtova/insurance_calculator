const Profile = () => {
    return (
        <section className="myCars">
            <div className="cars">
                <h2>МОИТЕ АВТОМОБИЛИ</h2>
                <section id="add-car" className="view-section">
                    <form className="text-center" action="#" method="">
                        <p>Добави автомобил</p>
                        <div className="form-group">
                            <label htmlFor="title"></label>
                            <input
                                id="title"
                                type="text"
                                className="form-control"
                                placeholder="Марка"
                                name="title"
                                defaultValue=""
                            />
                        </div>
                        <div className="form-group">
                            <input
                                id="title"
                                type="text"
                                className="form-control"
                                placeholder="Модел"
                                name="title"
                                defaultValue=""
                            />
                        </div>
                        <div className="form-group">
                            <input
                                id="title"
                                type="text"
                                className="form-control"
                                placeholder="ДКН"
                                name="title"
                                defaultValue=""
                            />
                        </div>
                        <div className="form-group">
                            <input
                                id="title"
                                type="text"
                                className="form-control"
                                placeholder="СРМПС"
                                name="title"
                                defaultValue=""
                            />
                        </div>
                        <button type="button" className="btn-myCars">
                            Submit
                        </button>
                    </form>
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

export default Profile;




<table className="allCars">
    <th>Марка</th>
    <th>Модел</th>
    <th>ДКН</th>
    <th>СРМПС</th>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>