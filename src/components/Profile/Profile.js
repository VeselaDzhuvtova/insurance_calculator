const Profile = () => {
    return (
        <section className="myCars">
            <div className="cars">
                <h2>МОИТЕ АВТОМОБИЛИ</h2>
                <p>Въведете данните на автомобилите, които притежавате:</p>
                <section id="add-car" className="view-section">
                    <form className="text-center" action="#" method="">
                        <h1>Добави автомобил</h1>
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
                </section>

            </div>
        </section>
    );
};

export default Profile;