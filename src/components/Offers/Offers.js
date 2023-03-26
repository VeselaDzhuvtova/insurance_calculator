import calculatePrice from "../InsuranceCalculator/insuranceCalculator";
const Offers = () => {

    return (
        <section className="add-car">
            <div className="allCars">
                <div className='allCars-info'>
                    <h4 className="of">ОФЕРТИ</h4>
                    <h3>Компания</h3>
                    <h3>{calculatePrice}</h3>
                    <h3>2вн</h3>
                    <h3>4 вн</h3>
                </div>
            </div>
        </section>
    );
};

export default Offers;