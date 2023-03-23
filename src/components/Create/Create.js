const Create = () => {
    return (
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
    );
};

export default Create;